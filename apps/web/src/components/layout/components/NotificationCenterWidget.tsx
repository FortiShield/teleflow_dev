import { useMantineColorScheme } from '@mantine/core';
import { IUserEntity, IMessage, MessageActionStatusEnum, ButtonTypeEnum } from '@teleflow/shared';
import { NotificationBell, TeleflowProvider, PopoverNotificationCenter, useUpdateAction } from '@teleflow/notification-center';

import { API_ROOT, APP_ID, WS_URL, IS_EU_ENV } from '../../../config';
import { useEnvController } from '../../../hooks';

const BACKEND_URL = IS_EU_ENV ? 'https://api.teleflow.khulnasoft.com' : API_ROOT;
const SOCKET_URL = IS_EU_ENV ? 'https://ws.teleflow.khulnasoft.com' : WS_URL;

export function NotificationCenterWidget({ user }: { user: IUserEntity | undefined }) {
  const { environment } = useEnvController();

  return (
    <>
      <TeleflowProvider
        backendUrl={BACKEND_URL}
        socketUrl={SOCKET_URL}
        subscriberId={user?._id as string}
        applicationIdentifier={APP_ID || (environment?.identifier as string)}
      >
        <PopoverWrapper />
      </TeleflowProvider>
    </>
  );
}

function PopoverWrapper() {
  const { colorScheme } = useMantineColorScheme();
  const { updateAction } = useUpdateAction();

  function handlerOnNotificationClick(message: IMessage) {
    if (message?.cta?.data?.url) {
      window.location.href = message.cta.data.url;
    }
  }

  async function handlerOnActionClick(templateIdentifier: string, type: ButtonTypeEnum, message: IMessage) {
    await updateAction({ messageId: message._id, actionButtonType: type, status: MessageActionStatusEnum.DONE });
  }

  return (
    <PopoverNotificationCenter
      colorScheme={colorScheme}
      onNotificationClick={handlerOnNotificationClick}
      onActionClick={handlerOnActionClick}
    >
      {({ unseenCount }) => {
        return <NotificationBell colorScheme={colorScheme} unseenCount={unseenCount} />;
      }}
    </PopoverNotificationCenter>
  );
}
