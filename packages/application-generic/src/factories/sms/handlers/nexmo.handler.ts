import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { BaseSmsHandler } from './base.handler';
import { NexmoSmsProvider } from '@teleflow/nexmo';

export class NexmoHandler extends BaseSmsHandler {
  constructor() {
    super('nexmo', ChannelTypeEnum.SMS);
  }

  buildProvider(credentials: ICredentials) {
    this.provider = new NexmoSmsProvider({
      apiKey: credentials.apiKey,
      from: credentials.from,
      apiSecret: credentials.secretKey,
    });
  }
}
