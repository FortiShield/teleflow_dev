import { Grid } from '@mantine/core';
import { ProviderCard } from './ProviderCard';
import { Title } from '@teleflow/design-system';
import { ChannelTypeEnum, EmailProviderIdEnum, SmsProviderIdEnum } from '@teleflow/shared';

import type { IIntegratedProvider } from '../types';
import { TeleflowIntegrationCard } from './TeleflowIntegrationCard';
import { When } from '../../../components/utils/When';
import { CONTEXT_PATH, IS_DOCKER_HOSTED } from '../../../config';

export function ChannelGroup({
  title,
  providers,
  onProviderClick,
  channel,
}: {
  providers: IIntegratedProvider[];
  title: string;
  onProviderClick: (visible: boolean, create: boolean, provider: IIntegratedProvider) => void;
  channel: ChannelTypeEnum;
}) {
  function handlerOnConnectClick(visible: boolean, create: boolean, provider: IIntegratedProvider) {
    onProviderClick(visible, create, provider);
  }

  return (
    <Grid mb={50}>
      <Grid.Col span={12} data-test-id={`integration-group-${title.toLowerCase()}`}>
        <Title size={2}>{title}</Title>
      </Grid.Col>
      <When truthy={channel === ChannelTypeEnum.EMAIL && !IS_DOCKER_HOSTED}>
        <Grid.Col sm={12} xs={6} md={4} lg={3}>
          <TeleflowIntegrationCard
            provider={{
              providerId: EmailProviderIdEnum.Teleflow,
              integrationId: '',
              displayName: 'Teleflow Email Provider',
              channel: ChannelTypeEnum.EMAIL,
              credentials: [],
              docReference: '',
              comingSoon: false,
              active:
                providers.filter((provider) => provider.active && provider.channel === ChannelTypeEnum.EMAIL).length ===
                0,
              connected: true,
              logoFileName: {
                dark: CONTEXT_PATH + '/static/images/logo-light.png',
                light: CONTEXT_PATH + '/static/images/logo.png',
              },
              betaVersion: false,
              teleflow: true,
              primary: false,
            }}
            onConnectClick={handlerOnConnectClick}
          />
        </Grid.Col>
      </When>

      <When truthy={channel === ChannelTypeEnum.SMS && !IS_DOCKER_HOSTED}>
        <Grid.Col sm={12} xs={6} md={4} lg={3}>
          <TeleflowIntegrationCard
            provider={{
              providerId: SmsProviderIdEnum.Teleflow,
              integrationId: '',
              displayName: 'Teleflow SMS Provider',
              channel: ChannelTypeEnum.SMS,
              credentials: [],
              docReference: '',
              comingSoon: false,
              active:
                providers.filter((provider) => provider.active && provider.channel === ChannelTypeEnum.SMS).length ===
                0,
              connected: true,
              logoFileName: {
                dark: CONTEXT_PATH + '/static/images/logo-light.png',
                light: CONTEXT_PATH + '/static/images/logo.png',
              },
              betaVersion: false,
              teleflow: true,
              primary: false,
            }}
            onConnectClick={handlerOnConnectClick}
          />
        </Grid.Col>
      </When>
      {providers.map((provider) => (
        <Grid.Col sm={12} xs={6} md={4} lg={3} key={provider.providerId}>
          <ProviderCard provider={provider} onConnectClick={handlerOnConnectClick} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
