import { teleflowInAppConfig } from '../credentials';

import { InAppProviderIdEnum } from '../provider.enum';
import { IProviderConfig } from '../provider.interface';

import { ChannelTypeEnum } from '../../../types';
import { UTM_CAMPAIGN_QUERY_PARAM } from '../../../ui';

export const inAppProviders: IProviderConfig[] = [
  {
    id: InAppProviderIdEnum.Teleflow,
    displayName: 'Teleflow In-App',
    channel: ChannelTypeEnum.IN_APP,
    credentials: teleflowInAppConfig,
    docReference: `https://docs.teleflow.khulnasoft.com/notification-center/introduction${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'teleflow.png', dark: 'teleflow.png' },
  },
];
