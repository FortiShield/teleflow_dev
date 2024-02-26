import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { ClickatellSmsProvider } from '@teleflow/clickatell';
import { BaseSmsHandler } from './base.handler';

export class ClickatellHandler extends BaseSmsHandler {
  constructor() {
    super('clickatell', ChannelTypeEnum.SMS);
  }
  buildProvider(credentials: ICredentials) {
    this.provider = new ClickatellSmsProvider({ apiKey: credentials.apiKey });
  }
}
