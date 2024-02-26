import { useMutation, useQueryClient, UseMutationOptions } from '@tanstack/react-query';
import type { IMessage } from '@teleflow/shared';

import { useTeleflowContext } from './useTeleflowContext';
import { useFetchNotificationsQueryKey } from './useFetchNotificationsQueryKey';

interface IRemoveAllNotificationsVariables {
  feedId?: string;
}

export const useRemoveAllNotifications = ({
  onSuccess,
  ...options
}: {
  onSuccess?: () => void;
} & UseMutationOptions<IMessage, Error, IRemoveAllNotificationsVariables> = {}) => {
  const queryClient = useQueryClient();
  const { apiService } = useTeleflowContext();
  const fetchNotificationsQueryKey = useFetchNotificationsQueryKey();

  const { mutate, ...result } = useMutation<IMessage, Error, IRemoveAllNotificationsVariables>(
    ({ feedId }) => {
      return apiService.removeAllMessages(feedId);
    },
    {
      ...options,
      onSuccess: (data, variables, context) => {
        queryClient.refetchQueries(fetchNotificationsQueryKey, { exact: false });
        onSuccess?.(data, variables, context);
      },
    }
  );

  return { ...result, removeAllNotifications: mutate };
};
