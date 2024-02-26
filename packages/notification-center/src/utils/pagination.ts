import type { IPaginatedResponse } from '@teleflow/shared';

export const getNextPageParam = (lastPage: IPaginatedResponse) => {
  return lastPage.hasMore ? lastPage.page + 1 : undefined;
};
