import { NotificationTemplateEntity } from '@teleflow/dal';
import { EnvironmentWithUserCommand } from '../../../shared/commands/project.command';

export class GetActiveIntegrationsStatusCommand extends EnvironmentWithUserCommand {
  workflows: NotificationTemplateEntity | NotificationTemplateEntity[];
}
