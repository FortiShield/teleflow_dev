import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import type { IUserPreferenceSettings } from '@teleflow/client';

import { useTeleflowContext } from './useTeleflowContext';
import { useFetchUserPreferencesQueryKey } from './useFetchUserPreferencesQueryKey';

export const useFetchUserPreferences = (
  options: UseQueryOptions<IUserPreferenceSettings[], Error, IUserPreferenceSettings[]> = {}
) => {
  const { apiService, isSessionInitialized, fetchingStrategy } = useTeleflowContext();
  const userPreferencesQueryKey = useFetchUserPreferencesQueryKey();

  const result = useQuery<IUserPreferenceSettings[], Error, IUserPreferenceSettings[]>(
    userPreferencesQueryKey,
    () => apiService.getUserPreference(),
    {
      ...options,
      enabled: isSessionInitialized && fetchingStrategy.fetchUserPreferences,
    }
  );

  return result;
};
