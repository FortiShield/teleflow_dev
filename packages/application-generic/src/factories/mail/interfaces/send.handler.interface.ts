import { IEmailOptions } from '@teleflow/shared';
import {
  IEmailProvider,
  ISendMessageSuccessResponse,
  ICheckIntegrationResponse,
} from '@teleflow/stateless';
import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';

export interface IMailHandler {
  canHandle(providerId: string, channelType: ChannelTypeEnum);

  buildProvider(credentials: ICredentials, from?: string);

  send(mailData: IEmailOptions): Promise<ISendMessageSuccessResponse>;

  getProvider(): IEmailProvider;

  check(): Promise<ICheckIntegrationResponse>;
}
