import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { BulkSmsProvider } from '@teleflow/bulk-sms';
import { BaseSmsHandler } from './base.handler';

export class BulkSmsHandler extends BaseSmsHandler {
  constructor() {
    super('bulk-sms', ChannelTypeEnum.SMS);
  }
  buildProvider(credentials: ICredentials) {
    const config = {
      apiToken: credentials.apiToken,
    };
    this.provider = new BulkSmsProvider(config);
  }
}
