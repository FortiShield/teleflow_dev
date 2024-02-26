import { ICredentials, ChatProviderIdEnum } from '@teleflow/shared';
import { ChannelTypeEnum } from '@teleflow/stateless';
import { BaseChatHandler } from './base.handler';
import { RocketChatProvider } from '@teleflow/rocket-chat';

export class RocketChatHandler extends BaseChatHandler {
  constructor() {
    super(ChatProviderIdEnum.RocketChat, ChannelTypeEnum.CHAT);
  }

  buildProvider(credentials: ICredentials) {
    const config: { token: string; user: string } = {
      token: credentials.token as string,
      user: credentials.user as string,
    };
    this.provider = new RocketChatProvider(config);
  }
}
