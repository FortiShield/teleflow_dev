import { IsEnum, IsMongoId, IsOptional, IsString } from 'class-validator';
import { BaseCommand } from '@teleflow/application-generic';
import { ChatProviderIdEnum } from '@teleflow/shared';

import { IsNotEmpty } from '../chat-oauth-callback/chat-oauth-callback.command';

export class ChatOauthCommand extends BaseCommand {
  @IsMongoId()
  @IsString()
  readonly environmentId: string;

  @IsNotEmpty()
  @IsEnum(ChatProviderIdEnum)
  readonly providerId: ChatProviderIdEnum;

  @IsNotEmpty()
  @IsString()
  readonly subscriberId: string;

  @IsOptional()
  @IsString()
  readonly integrationIdentifier?: string;

  readonly hmacHash?: string;
}
