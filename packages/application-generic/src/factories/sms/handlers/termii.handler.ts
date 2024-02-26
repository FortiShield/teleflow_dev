import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { TermiiSmsProvider } from '@teleflow/termii';
import { BaseSmsHandler } from './base.handler';

export class TermiiSmsHandler extends BaseSmsHandler {
  constructor() {
    super('termii', ChannelTypeEnum.SMS);
  }

  buildProvider(credentials: ICredentials) {
    this.provider = new TermiiSmsProvider({
      apiKey: credentials.apiKey,
      from: credentials.from,
    });
  }
}
