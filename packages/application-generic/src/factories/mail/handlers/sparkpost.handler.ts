import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { SparkPostEmailProvider } from '@teleflow/sparkpost';

import { BaseHandler } from './base.handler';

export class SparkPostHandler extends BaseHandler {
  constructor() {
    super('sparkpost', ChannelTypeEnum.EMAIL);
  }
  buildProvider(credentials: ICredentials, from?: string) {
    const config = {
      from: from as string,
      apiKey: credentials.apiKey as string,
      region: credentials.region as string,
      senderName: credentials.senderName as string,
    };

    this.provider = new SparkPostEmailProvider(config);
  }
}
