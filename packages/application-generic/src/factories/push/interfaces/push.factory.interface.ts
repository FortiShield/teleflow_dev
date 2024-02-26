import { IntegrationEntity } from '@teleflow/dal';
import { IPushHandler } from './push.handler.interface';

export interface IPushFactory {
  getHandler(integration: IntegrationEntity): IPushHandler | null;
}
