import { Inject, Injectable, Scope } from '@nestjs/common';
import { OrganizationEntity, OrganizationRepository, UserRepository } from '@teleflow/dal';
import { ApiServiceLevelEnum, JobTitleEnum, MemberRoleEnum } from '@teleflow/shared';
import { AnalyticsService } from '@teleflow/application-generic';

import { CreateEnvironmentCommand } from '../../../environments/usecases/create-environment/create-environment.command';
import { CreateEnvironment } from '../../../environments/usecases/create-environment/create-environment.usecase';
import { GetOrganizationCommand } from '../get-organization/get-organization.command';
import { GetOrganization } from '../get-organization/get-organization.usecase';
import { AddMemberCommand } from '../membership/add-member/add-member.command';
import { AddMember } from '../membership/add-member/add-member.usecase';
import { CreateOrganizationCommand } from './create-organization.command';

import { ApiException } from '../../../shared/exceptions/api.exception';
import { CreateTeleflowIntegrations } from '../../../integrations/usecases/create-teleflow-integrations/create-teleflow-integrations.usecase';
import { CreateTeleflowIntegrationsCommand } from '../../../integrations/usecases/create-teleflow-integrations/create-teleflow-integrations.command';

@Injectable({
  scope: Scope.REQUEST,
})
export class CreateOrganization {
  constructor(
    private readonly organizationRepository: OrganizationRepository,
    private readonly addMemberUsecase: AddMember,
    private readonly getOrganizationUsecase: GetOrganization,
    private readonly userRepository: UserRepository,
    private readonly createEnvironmentUsecase: CreateEnvironment,
    private readonly createTeleflowIntegrations: CreateTeleflowIntegrations,
    private analyticsService: AnalyticsService
  ) {}

  async execute(command: CreateOrganizationCommand): Promise<OrganizationEntity> {
    const user = await this.userRepository.findById(command.userId);
    if (!user) throw new ApiException('User not found');

    const createdOrganization = await this.organizationRepository.create({
      logo: command.logo,
      name: command.name,
      apiServiceLevel: ApiServiceLevelEnum.FREE,
      domain: command.domain,
      productUseCases: command.productUseCases,
    });

    if (command.jobTitle) {
      await this.updateJobTitle(user, command.jobTitle);
    }

    await this.addMemberUsecase.execute(
      AddMemberCommand.create({
        roles: [MemberRoleEnum.ADMIN],
        organizationId: createdOrganization._id,
        userId: command.userId,
      })
    );

    const devEnv = await this.createEnvironmentUsecase.execute(
      CreateEnvironmentCommand.create({
        userId: user._id,
        name: 'Development',
        organizationId: createdOrganization._id,
      })
    );

    await this.createTeleflowIntegrations.execute(
      CreateTeleflowIntegrationsCommand.create({
        environmentId: devEnv._id,
        organizationId: devEnv._organizationId,
        userId: user._id,
      })
    );

    const prodEnv = await this.createEnvironmentUsecase.execute(
      CreateEnvironmentCommand.create({
        userId: user._id,
        name: 'Production',
        organizationId: createdOrganization._id,
        parentEnvironmentId: devEnv._id,
      })
    );

    await this.createTeleflowIntegrations.execute(
      CreateTeleflowIntegrationsCommand.create({
        environmentId: prodEnv._id,
        organizationId: prodEnv._organizationId,
        userId: user._id,
      })
    );

    this.analyticsService.upsertGroup(createdOrganization._id, createdOrganization, user);

    this.analyticsService.track('[Authentication] - Create Organization', user._id, {
      _organization: createdOrganization._id,
    });

    const organizationAfterChanges = await this.getOrganizationUsecase.execute(
      GetOrganizationCommand.create({
        id: createdOrganization._id,
        userId: command.userId,
      })
    );

    return organizationAfterChanges as OrganizationEntity;
  }

  private async updateJobTitle(user, jobTitle: JobTitleEnum) {
    await this.userRepository.update(
      {
        _id: user._id,
      },
      {
        $set: {
          jobTitle: jobTitle,
        },
      }
    );

    this.analyticsService.setValue(user._id, 'jobTitle', jobTitle);
  }
}
