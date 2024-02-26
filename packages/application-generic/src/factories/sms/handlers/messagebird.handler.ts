import { MessageBirdSmsProvider } from '@teleflow/messagebird';
import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { BaseSmsHandler } from './base.handler';

export class MessageBirdHandler extends BaseSmsHandler {
  constructor() {
    super('messagebird', ChannelTypeEnum.SMS);
  }
  buildProvider(credentials: ICredentials) {
    this.provider = new MessageBirdSmsProvider({
      access_key: credentials.accessKey,
    });
  }
}
