import { IsDefined } from 'class-validator';
import { IJwtPayload } from '@teleflow/shared';
import { OrganizationCommand } from '../../../../shared/commands/organization.command';

export class GetMembersCommand extends OrganizationCommand {
  @IsDefined()
  user: IJwtPayload;
}
