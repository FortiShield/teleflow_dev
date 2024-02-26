import { Injectable } from '@nestjs/common';
import { IntegrationRepository } from '@teleflow/dal';
import { areTeleflowEmailCredentialsSet, areTeleflowSmsCredentialsSet } from '@teleflow/application-generic';

import { CreateTeleflowIntegrationsCommand } from './create-teleflow-integrations.command';
import { CreateIntegration } from '../create-integration/create-integration.usecase';
import { CreateIntegrationCommand } from '../create-integration/create-integration.command';
import { ChannelTypeEnum, EmailProviderIdEnum, SmsProviderIdEnum } from '@teleflow/shared';

@Injectable()
export class CreateTeleflowIntegrations {
  constructor(private createIntegration: CreateIntegration, private integrationRepository: IntegrationRepository) {}

  private async createEmailIntegration(command: CreateTeleflowIntegrationsCommand) {
    if (!areTeleflowEmailCredentialsSet()) {
      return;
    }

    const emailIntegrationCount = await this.integrationRepository.count({
      providerId: EmailProviderIdEnum.Teleflow,
      channel: ChannelTypeEnum.EMAIL,
      _organizationId: command.organizationId,
      _environmentId: command.environmentId,
    });

    if (emailIntegrationCount === 0) {
      await this.createIntegration.execute(
        CreateIntegrationCommand.create({
          providerId: EmailProviderIdEnum.Teleflow,
          channel: ChannelTypeEnum.EMAIL,
          active: true,
          name: 'Teleflow Email',
          check: false,
          userId: command.userId,
          environmentId: command.environmentId,
          organizationId: command.organizationId,
        })
      );
    }
  }

  private async createSmsIntegration(command: CreateTeleflowIntegrationsCommand) {
    if (!areTeleflowSmsCredentialsSet()) {
      return;
    }

    const smsIntegrationCount = await this.integrationRepository.count({
      providerId: SmsProviderIdEnum.Teleflow,
      channel: ChannelTypeEnum.SMS,
      _organizationId: command.organizationId,
      _environmentId: command.environmentId,
    });

    if (smsIntegrationCount === 0) {
      await this.createIntegration.execute(
        CreateIntegrationCommand.create({
          providerId: SmsProviderIdEnum.Teleflow,
          channel: ChannelTypeEnum.SMS,
          name: 'Teleflow SMS',
          active: true,
          check: false,
          userId: command.userId,
          environmentId: command.environmentId,
          organizationId: command.organizationId,
        })
      );
    }
  }

  async execute(command: CreateTeleflowIntegrationsCommand): Promise<void> {
    await this.createEmailIntegration(command);
    await this.createSmsIntegration(command);
  }
}
