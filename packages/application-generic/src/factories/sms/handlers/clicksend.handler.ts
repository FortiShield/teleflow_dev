import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { ClicksendSmsProvider } from '@teleflow/clicksend';
import { BaseSmsHandler } from './base.handler';

export class ClicksendSmsHandler extends BaseSmsHandler {
  constructor() {
    super('clicksend', ChannelTypeEnum.SMS);
  }

  buildProvider(credentials: ICredentials) {
    const config = {
      username: credentials.user,
      apiKey: credentials.apiKey,
    };

    this.provider = new ClicksendSmsProvider(config);
  }
}
