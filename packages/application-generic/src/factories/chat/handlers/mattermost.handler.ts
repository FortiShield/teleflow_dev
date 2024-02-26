import { ICredentials } from '@teleflow/shared';
import { ChannelTypeEnum } from '@teleflow/stateless';
import { BaseChatHandler } from './base.handler';
import { MattermostProvider } from '@teleflow/mattermost';

export class MattermostHandler extends BaseChatHandler {
  constructor() {
    super('mattermost', ChannelTypeEnum.CHAT);
  }

  buildProvider(_credentials: ICredentials) {
    this.provider = new MattermostProvider();
  }
}
