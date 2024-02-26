import { IsDefined } from 'class-validator';
import { EnvironmentWithUserCommand } from '@teleflow/application-generic';

export class QueueNextJobCommand extends EnvironmentWithUserCommand {
  @IsDefined()
  parentId: string;
}
