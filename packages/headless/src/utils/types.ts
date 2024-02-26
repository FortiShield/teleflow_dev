import { ISubscriberJwt } from '@teleflow/shared';

export interface ISession {
  token: string;
  profile: ISubscriberJwt;
}
