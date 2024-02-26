import { ICredentials } from '@teleflow/shared';
import { ChannelTypeEnum } from '@teleflow/stateless';
import { RyverChatProvider } from '@teleflow/ryver';
import { BaseChatHandler } from './base.handler';

export class RyverHandler extends BaseChatHandler {
  constructor() {
    super('ryver', ChannelTypeEnum.CHAT);
  }

  buildProvider(_credentials: ICredentials) {
    this.provider = new RyverChatProvider();
  }
}
