import { IEventBody } from '@teleflow/stateless';

export interface IWebhookResult {
  id: string;
  event: IEventBody;
}
