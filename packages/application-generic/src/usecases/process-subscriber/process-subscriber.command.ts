import { IsDefined } from 'class-validator';
import { ISubscribersDefine } from '@teleflow/shared';

import { EnvironmentWithUserCommand } from '../../commands';

export class ProcessSubscriberCommand extends EnvironmentWithUserCommand {
  @IsDefined()
  subscriber: ISubscribersDefine;
}
