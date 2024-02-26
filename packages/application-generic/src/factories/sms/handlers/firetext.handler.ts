import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { BaseSmsHandler } from './base.handler';
import { FiretextSmsProvider } from '@teleflow/firetext';

export class FiretextSmsHandler extends BaseSmsHandler {
  constructor() {
    super('firetext', ChannelTypeEnum.SMS);
  }

  buildProvider(credentials: ICredentials) {
    this.provider = new FiretextSmsProvider({
      apiKey: credentials.apiKey,
      from: credentials.from,
    });
  }
}
