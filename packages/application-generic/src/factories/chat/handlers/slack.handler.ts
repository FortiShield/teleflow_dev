import { ICredentials } from '@teleflow/shared';
import { ChannelTypeEnum } from '@teleflow/stateless';
import { SlackProvider } from '@teleflow/slack';

import { BaseChatHandler } from './base.handler';

export class SlackHandler extends BaseChatHandler {
  constructor() {
    super('slack', ChannelTypeEnum.CHAT);
  }

  buildProvider(_: ICredentials) {
    this.provider = new SlackProvider();
  }
}
