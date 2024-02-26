import { IsDefined } from 'class-validator';
import { EnvironmentCommand } from '@teleflow/application-generic';

import { WebhookTypes } from '../../interfaces/webhook.interface';

export class WebhookCommand extends EnvironmentCommand {
  @IsDefined()
  providerOrIntegrationId: string;

  @IsDefined()
  body: any;

  @IsDefined()
  type: WebhookTypes;
}
