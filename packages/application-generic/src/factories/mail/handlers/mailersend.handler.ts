import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { MailersendEmailProvider } from '@teleflow/mailersend';

import { BaseHandler } from './base.handler';

export class MailerSendHandler extends BaseHandler {
  constructor() {
    super('mailersend', ChannelTypeEnum.EMAIL);
  }

  buildProvider(credentials: ICredentials, from?: string) {
    this.provider = new MailersendEmailProvider({
      apiKey: credentials.apiKey as string,
      from: from as string,
      senderName: credentials.senderName,
    });
  }
}
