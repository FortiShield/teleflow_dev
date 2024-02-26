import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { SendchampSmsProvider } from '@teleflow/sendchamp';
import { BaseSmsHandler } from './base.handler';

export class SendchampSmsHandler extends BaseSmsHandler {
  constructor() {
    super('sendchamp', ChannelTypeEnum.SMS);
  }

  buildProvider(credentials: ICredentials) {
    if (!credentials.apiKey || !credentials.from) {
      throw Error('Invalid credentials');
    }

    const config = {
      apiKey: credentials.apiKey,
      from: credentials.from,
    };

    this.provider = new SendchampSmsProvider(config);
  }
}
