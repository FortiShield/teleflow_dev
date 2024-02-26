import { MemberRoleEnum } from '@teleflow/shared';
import { OrganizationCommand } from '../../../shared/commands/organization.command';

export class BulkInviteCommand extends OrganizationCommand {
  invitees: {
    email: string;
    role?: MemberRoleEnum;
  }[];
}
