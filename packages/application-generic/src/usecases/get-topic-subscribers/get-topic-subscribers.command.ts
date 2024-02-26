import { IsDefined, IsString } from 'class-validator';

import { TopicKey } from '@teleflow/shared';
import { EnvironmentCommand } from '../../commands';

export class GetTopicSubscribersCommand extends EnvironmentCommand {
  @IsString()
  @IsDefined()
  topicKey: TopicKey;
}
