import { IsDefined, IsOptional } from 'class-validator';
import { JobEntity } from '@teleflow/dal';

import { BaseCommand } from '../../commands/base.command';

export class MergeOrCreateDigestCommand extends BaseCommand {
  @IsDefined()
  job: JobEntity;

  @IsOptional()
  filtered?: boolean;
}
