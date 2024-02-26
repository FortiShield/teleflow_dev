import { useCallback } from 'react';
import { useTeleflowContext } from './useTeleflowContext';

export const useSetQueryKey = () => {
  const { subscriberId, subscriberHash, applicationIdentifier } = useTeleflowContext();
  const setQueryKey = useCallback(
    (queryKeys: Array<unknown>) => [...queryKeys, subscriberId, applicationIdentifier, subscriberHash],
    [subscriberId, subscriberHash, applicationIdentifier]
  );

  return setQueryKey;
};
