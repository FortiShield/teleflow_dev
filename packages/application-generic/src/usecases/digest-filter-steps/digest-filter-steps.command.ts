import {
  IsBoolean,
  IsDefined,
  IsMongoId,
  IsOptional,
  IsString,
} from 'class-validator';
import { NotificationStepEntity } from '@teleflow/dal';
import { DigestTypeEnum } from '@teleflow/shared';

import { EnvironmentWithUserCommand } from '../../commands/project.command';

export class DigestFilterStepsCommand extends EnvironmentWithUserCommand {
  @IsMongoId()
  _subscriberId: string;

  @IsDefined()
  payload: any; // eslint-disable-line @typescript-eslint/no-explicit-any

  @IsDefined()
  steps: NotificationStepEntity[];

  @IsMongoId()
  templateId: string;

  @IsMongoId()
  notificationId: string;

  @IsString()
  transactionId: string;

  @IsString()
  type: DigestTypeEnum;

  @IsBoolean()
  @IsOptional()
  backoff?: boolean;
}
