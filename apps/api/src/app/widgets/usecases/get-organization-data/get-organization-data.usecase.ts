import { Injectable, NotFoundException } from '@nestjs/common';
import { OrganizationRepository } from '@teleflow/dal';
import { OrganizationResponseDto } from '../../dtos/organization-response.dto';
import { GetOrganizationDataCommand } from './get-organization-data.command';

@Injectable()
export class GetOrganizationData {
  constructor(private organizationRepository: OrganizationRepository) {}

  async execute(command: GetOrganizationDataCommand): Promise<OrganizationResponseDto> {
    const organization = await this.organizationRepository.findOrganizationById(command.organizationId);
    if (!organization) {
      throw new NotFoundException(`Organization with id ${command.organizationId} not found`);
    }

    return {
      _id: organization._id,
      name: organization.name,
      branding: organization.branding,
    };
  }
}
