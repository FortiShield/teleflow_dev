import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { ResendEmailProvider } from '@teleflow/resend';
import { BaseHandler } from './base.handler';

export class ResendHandler extends BaseHandler {
  constructor() {
    super('resend', ChannelTypeEnum.EMAIL);
  }
  buildProvider(credentials: ICredentials, from?: string) {
    const config: { apiKey: string; from: string; senderName?: string } = {
      from: from as string,
      apiKey: credentials.apiKey as string,
      senderName: credentials.senderName,
    };

    this.provider = new ResendEmailProvider(config);
  }
}
