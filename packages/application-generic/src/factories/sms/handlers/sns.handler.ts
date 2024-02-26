import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { SNSSmsProvider } from '@teleflow/sns';
import { SNSConfig } from '@teleflow/sns/build/main/lib/sns.config';
import { BaseSmsHandler } from './base.handler';

export class SnsHandler extends BaseSmsHandler {
  constructor() {
    super('sns', ChannelTypeEnum.SMS);
  }
  buildProvider(credentials: ICredentials) {
    this.provider = new SNSSmsProvider({
      accessKeyId: credentials.apiKey,
      secretAccessKey: credentials.secretKey,
      region: credentials.region,
    });
  }
}
