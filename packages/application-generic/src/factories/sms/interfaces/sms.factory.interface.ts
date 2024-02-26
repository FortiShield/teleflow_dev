import { IntegrationEntity } from '@teleflow/dal';
import { ISmsHandler } from './sms.handler.interface';

export interface ISmsFactory {
  getHandler(integration: IntegrationEntity): ISmsHandler | null;
}
