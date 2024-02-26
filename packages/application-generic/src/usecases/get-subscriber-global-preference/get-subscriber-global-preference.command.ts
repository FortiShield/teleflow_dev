import { SubscriberEntity } from '@teleflow/dal';

import { EnvironmentWithSubscriber } from '../../commands';

export class GetSubscriberGlobalPreferenceCommand extends EnvironmentWithSubscriber {
  subscriber?: SubscriberEntity;
}
