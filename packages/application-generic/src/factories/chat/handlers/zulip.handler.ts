import { ICredentials, ChatProviderIdEnum } from '@teleflow/shared';
import { ChannelTypeEnum } from '@teleflow/stateless';
import { BaseChatHandler } from './base.handler';
import { ZulipProvider } from '@teleflow/zulip';

export class ZulipHandler extends BaseChatHandler {
  constructor() {
    super(ChatProviderIdEnum.Zulip, ChannelTypeEnum.CHAT);
  }

  buildProvider(_credentials: ICredentials) {
    this.provider = new ZulipProvider({});
  }
}
