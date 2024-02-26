import { IsDefined, IsOptional } from 'class-validator';
import { JobStatusEnum } from '@teleflow/dal';
import { EnvironmentLevelCommand } from '@teleflow/application-generic';

export class UpdateJobStatusCommand extends EnvironmentLevelCommand {
  @IsDefined()
  jobId: string;

  @IsDefined()
  status: JobStatusEnum;

  @IsOptional()
  error?: any;
}
