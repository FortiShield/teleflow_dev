import type { IUserGlobalPreferenceSettings } from '@teleflow/client';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { useFetchUserGlobalPreferencesQueryKey } from './useFetchUserGlobalPreferencesQueryKey';
import { useTeleflowContext } from './useTeleflowContext';

export const useFetchUserGlobalPreferences = (
  options: UseQueryOptions<IUserGlobalPreferenceSettings[], Error, IUserGlobalPreferenceSettings[]> = {}
) => {
  const { apiService, isSessionInitialized, fetchingStrategy } = useTeleflowContext();
  const userGlobalPreferencesQueryKey = useFetchUserGlobalPreferencesQueryKey();

  const result = useQuery<IUserGlobalPreferenceSettings[], Error, IUserGlobalPreferenceSettings[]>(
    userGlobalPreferencesQueryKey,
    () => apiService.getUserGlobalPreference(),
    {
      ...options,
      enabled: isSessionInitialized && fetchingStrategy.fetchUserGlobalPreferences,
    }
  );

  return result;
};
