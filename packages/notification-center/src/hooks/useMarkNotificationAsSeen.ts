import { InfiniteData, useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';

import type { IMessage, IPaginatedResponse } from '@teleflow/shared';
import { IStoreQuery } from '@teleflow/client';

import { useTeleflowContext } from './useTeleflowContext';
import { useFetchNotificationsQueryKey } from './useFetchNotificationsQueryKey';

interface IMarkNotificationsAsReadVariables {
  feedId?: string | string[];
}

export const useMarkNotificationsAsSeen = ({
  onSuccess,
  query,
  ...options
}: {
  onSuccess?: () => void;
  query?: IStoreQuery;
} & UseMutationOptions<IMessage[], Error, IMarkNotificationsAsReadVariables> = {}) => {
  const queryClient = useQueryClient();
  const { apiService } = useTeleflowContext();
  const fetchNotificationsQueryKey = useFetchNotificationsQueryKey();

  const { mutate, ...result } = useMutation<IMessage[], Error, IMarkNotificationsAsReadVariables>(
    ({ feedId }) => apiService.markAllMessagesAsSeen(feedId),
    {
      ...options,
      onSuccess: (responseData, variables, context) => {
        queryClient.setQueriesData<InfiniteData<IPaginatedResponse<IMessage>>>(
          { queryKey: fetchNotificationsQueryKey, exact: false },
          (infiniteData) => {
            const pages = infiniteData.pages.map((page) => {
              const data = page.data.map((message) => {
                return { ...message, read: false, seen: true };
              });

              return {
                ...page,
                data,
              };
            });

            return {
              pageParams: infiniteData.pageParams,
              pages,
            };
          }
        );
        onSuccess?.(responseData, variables, context);
      },
    }
  );

  return { ...result, markNotificationsAsSeen: mutate };
};
