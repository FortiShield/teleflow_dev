import { IsDefined } from 'class-validator';
import { EnvironmentWithUserCommand } from '@teleflow/application-generic';

export class RunJobCommand extends EnvironmentWithUserCommand {
  @IsDefined()
  jobId: string;
}
