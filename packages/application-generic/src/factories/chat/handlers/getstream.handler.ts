import { ChannelTypeEnum } from '@teleflow/stateless';

import { ICredentials } from '@teleflow/shared';
import { BaseChatHandler } from './base.handler';
import { GetstreamChatProvider } from '@teleflow/getstream';

export class GetstreamChatHandler extends BaseChatHandler {
  constructor() {
    super('getstream', ChannelTypeEnum.CHAT);
  }

  buildProvider(credentials: ICredentials) {
    const config: {
      apiKey: string;
    } = {
      apiKey: credentials.apiKey as string,
    };
    this.provider = new GetstreamChatProvider(config);
  }
}
