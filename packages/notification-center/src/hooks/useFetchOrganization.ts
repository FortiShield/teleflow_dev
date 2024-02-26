import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { IOrganizationEntity } from '@teleflow/shared';

import { useTeleflowContext } from './useTeleflowContext';
import { ORGANIZATION_QUERY_KEY } from './queryKeys';
import { useSetQueryKey } from './useSetQueryKey';

export const useFetchOrganization = (
  options: UseQueryOptions<IOrganizationEntity, Error, IOrganizationEntity> = {}
) => {
  const { apiService, isSessionInitialized, fetchingStrategy } = useTeleflowContext();
  const setQueryKey = useSetQueryKey();

  const result = useQuery<IOrganizationEntity, Error, IOrganizationEntity>(
    setQueryKey(ORGANIZATION_QUERY_KEY),
    () => apiService.getOrganization(),
    {
      ...options,
      enabled: isSessionInitialized && fetchingStrategy.fetchOrganization,
    }
  );

  return result;
};
