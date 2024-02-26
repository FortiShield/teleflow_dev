import { IPushOptions, IPushProvider } from '@teleflow/stateless';
import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import {} from '@teleflow/dal';
import { IPushHandler } from '../interfaces';

export abstract class BasePushHandler implements IPushHandler {
  protected provider: IPushProvider;

  protected constructor(
    private providerId: string,
    private channelType: string
  ) {}

  canHandle(providerId: string, channelType: ChannelTypeEnum) {
    return providerId === this.providerId && channelType === this.channelType;
  }

  async send(options: IPushOptions) {
    if (process.env.NODE_ENV === 'test') {
      throw new Error(
        'Currently 3rd-party packages test are not support on test env'
      );
    }

    return await this.provider.sendMessage(options);
  }

  abstract buildProvider(credentials: ICredentials);
}
