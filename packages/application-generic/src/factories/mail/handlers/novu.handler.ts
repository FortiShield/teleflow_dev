import { ChannelTypeEnum, EmailProviderIdEnum } from '@teleflow/shared';
import { SendgridEmailProvider } from '@teleflow/sendgrid';

import { BaseHandler } from './base.handler';

export class TeleflowEmailHandler extends BaseHandler {
  constructor() {
    super(EmailProviderIdEnum.Teleflow, ChannelTypeEnum.EMAIL);
  }

  buildProvider(credentials, from?: string) {
    this.provider = new SendgridEmailProvider({
      apiKey: credentials.apiKey,
      from,
      senderName: credentials.senderName,
      ipPoolName: credentials.ipPoolName,
    });
  }
}
