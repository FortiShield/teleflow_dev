import { TwilioSmsProvider } from '@teleflow/twilio';
import { ChannelTypeEnum, ICredentials, SmsProviderIdEnum } from '@teleflow/shared';
import { BaseSmsHandler } from './base.handler';

export class TeleflowSmsHandler extends BaseSmsHandler {
  constructor() {
    super(SmsProviderIdEnum.Teleflow, ChannelTypeEnum.SMS);
  }
  buildProvider(credentials: ICredentials) {
    this.provider = new TwilioSmsProvider({
      accountSid: credentials.accountSid,
      authToken: credentials.token,
      from: credentials.from,
    });
  }
}
