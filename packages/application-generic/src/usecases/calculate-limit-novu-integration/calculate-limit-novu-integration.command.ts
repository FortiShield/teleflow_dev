import { IsEnum } from 'class-validator';
import { ChannelTypeEnum } from '@teleflow/shared';

import { EnvironmentCommand } from '../../commands/project.command';

export class CalculateLimitTeleflowIntegrationCommand extends EnvironmentCommand {
  @IsEnum(ChannelTypeEnum)
  channelType: ChannelTypeEnum;
}
