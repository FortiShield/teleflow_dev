import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { TelnyxSmsProvider } from '@teleflow/telnyx';
import { BaseSmsHandler } from './base.handler';

export class TelnyxHandler extends BaseSmsHandler {
  constructor() {
    super('telnyx', ChannelTypeEnum.SMS);
  }

  buildProvider(credentials: ICredentials) {
    this.provider = new TelnyxSmsProvider({
      apiKey: credentials.apiKey,
      from: credentials.from,
      messageProfileId: credentials.messageProfileId,
    });
  }
}
