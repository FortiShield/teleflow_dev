import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { ISendSmsProvider } from '@teleflow/isend-sms';
import { BaseSmsHandler } from './base.handler';

export class ISendSmsHandler extends BaseSmsHandler {
  constructor() {
    super('isend-sms', ChannelTypeEnum.SMS);
  }

  buildProvider(credentials: ICredentials) {
    const config: {
      apiToken: string;
    } = {
      apiToken: credentials.apiToken ?? '',
      ...credentials,
    };

    this.provider = new ISendSmsProvider(config);
  }
}
