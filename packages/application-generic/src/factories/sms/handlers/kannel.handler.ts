import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { KannelSmsProvider } from '@teleflow/kannel';
import { BaseSmsHandler } from './base.handler';

export class KannelSmsHandler extends BaseSmsHandler {
  constructor() {
    super('kannel', ChannelTypeEnum.SMS);
  }

  buildProvider(credentials: ICredentials) {
    const config: {
      host: string;
      port: string;
      from: string;
      username?: string;
      password?: string;
    } = {
      host: credentials.host || '',
      port: credentials.port || '',
      from: credentials.from || '',
      username: credentials.user,
      password: credentials.password,
    };

    this.provider = new KannelSmsProvider(config);
  }
}
