import { ICredentials } from '@teleflow/shared';
import { ChannelTypeEnum } from '@teleflow/stateless';
import { BaseChatHandler } from './base.handler';
import { MsTeamsProvider } from '@teleflow/ms-teams';

export class MSTeamsHandler extends BaseChatHandler {
  constructor() {
    super('msteams', ChannelTypeEnum.CHAT);
  }

  buildProvider(_credentials: ICredentials) {
    this.provider = new MsTeamsProvider({});
  }
}
