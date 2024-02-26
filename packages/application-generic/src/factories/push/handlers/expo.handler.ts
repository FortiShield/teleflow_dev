import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { ExpoPushProvider } from '@teleflow/expo';
import { BasePushHandler } from './base.handler';

export class ExpoHandler extends BasePushHandler {
  constructor() {
    super('expo', ChannelTypeEnum.PUSH);
  }

  buildProvider(credentials: ICredentials) {
    if (!credentials.apiKey) {
      throw Error('Config is not valid for expo');
    }

    this.provider = new ExpoPushProvider({
      accessToken: credentials.apiKey,
    });
  }
}
