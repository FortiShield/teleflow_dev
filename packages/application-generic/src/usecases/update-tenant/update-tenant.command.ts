import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { TenantCustomData } from '@teleflow/shared';
import { TenantEntity } from '@teleflow/dal';

import { EnvironmentWithUserCommand } from '../../commands';

export class UpdateTenantCommand extends EnvironmentWithUserCommand {
  @IsString()
  @IsNotEmpty()
  identifier: string;

  @IsString()
  @IsOptional()
  newIdentifier?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  data?: TenantCustomData;

  @IsOptional()
  tenant?: TenantEntity;
}
