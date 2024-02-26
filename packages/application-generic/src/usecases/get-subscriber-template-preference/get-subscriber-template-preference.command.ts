import { NotificationTemplateEntity, SubscriberEntity } from '@teleflow/dal';
import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';

import { EnvironmentWithSubscriber } from '../../commands';
import { ITenantDefine } from '@teleflow/shared';

export class GetSubscriberTemplatePreferenceCommand extends EnvironmentWithSubscriber {
  @IsNotEmpty()
  @IsDefined()
  template: NotificationTemplateEntity;

  @IsOptional()
  subscriber?: SubscriberEntity;

  @IsOptional()
  tenant?: ITenantDefine;
}
