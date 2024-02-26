import { useTeleflowContext } from './useTeleflowContext';

export function useSocket() {
  const { socket } = useTeleflowContext();

  return {
    socket,
  };
}
