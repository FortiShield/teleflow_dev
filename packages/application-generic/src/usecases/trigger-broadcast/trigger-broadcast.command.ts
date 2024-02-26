import { IsDefined, IsOptional, ValidateNested } from 'class-validator';

import { NotificationTemplateEntity, SubscriberEntity } from '@teleflow/dal';
import { ITenantDefine } from '@teleflow/shared';

import { TriggerEventBroadcastCommand } from '../trigger-event';

export class TriggerBroadcastCommand extends TriggerEventBroadcastCommand {
  @IsDefined()
  template: NotificationTemplateEntity;

  @IsOptional()
  actor?: SubscriberEntity | undefined;

  @ValidateNested()
  tenant: ITenantDefine | null;
}
