import { IChatOptions, ISendMessageSuccessResponse } from '@teleflow/stateless';
import { IntegrationEntity } from '@teleflow/dal';
import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';

export interface IChatHandler {
  canHandle(providerId: string, channelType: ChannelTypeEnum);
  buildProvider(credentials: ICredentials);
  send(chatData: IChatOptions): Promise<ISendMessageSuccessResponse>;
}

export interface IChatFactory {
  getHandler(integration: IntegrationEntity): IChatHandler | null;
}
