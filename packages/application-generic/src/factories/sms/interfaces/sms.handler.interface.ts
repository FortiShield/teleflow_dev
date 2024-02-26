import {
  ISendMessageSuccessResponse,
  ISmsOptions,
  ISmsProvider,
} from '@teleflow/stateless';
import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';

export interface ISmsHandler {
  canHandle(providerId: string, channelType: ChannelTypeEnum);

  buildProvider(credentials: ICredentials);

  send(smsOptions: ISmsOptions): Promise<ISendMessageSuccessResponse>;

  getProvider(): ISmsProvider;
}
