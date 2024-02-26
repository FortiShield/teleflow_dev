import { IsArray, ValidateNested } from 'class-validator';
import { EnvironmentCommand } from '@teleflow/application-generic';
import { CreateSubscriberRequestDto } from '../../dtos';

export class BulkCreateSubscribersCommand extends EnvironmentCommand {
  @IsArray()
  @ValidateNested()
  subscribers: CreateSubscriberRequestDto[];
}
