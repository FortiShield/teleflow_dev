import { useContext } from 'react';
import { TeleflowContext } from '../store/teleflow-provider.context';
import { useProviderCheck } from './useProviderCheck';
import { ITeleflowProviderContext } from '../shared/interfaces';

/**
 * custom hook for accessing TeleflowContext
 * @returns ITeleflowProviderContext
 */
export function useTeleflowContext(): ITeleflowProviderContext {
  const teleflowContext = useContext<ITeleflowProviderContext>(TeleflowContext);
  const context = useProviderCheck<ITeleflowProviderContext>(teleflowContext);

  return context;
}
