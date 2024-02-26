import { IsDefined, IsOptional } from 'class-validator';
import { ISubscribersDefine, TriggerRecipientsPayload } from '@teleflow/shared';
import { EnvironmentWithUserCommand } from '../../commands';

export class MapTriggerRecipientsCommand extends EnvironmentWithUserCommand {
  @IsDefined()
  recipients: TriggerRecipientsPayload;

  @IsDefined()
  transactionId: string;

  @IsOptional()
  actor?: ISubscribersDefine | null;
}
