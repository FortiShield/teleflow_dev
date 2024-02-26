import { ApiProperty } from '@nestjs/swagger';

import { EnvironmentId, TenantCustomData } from '@teleflow/shared';
import { TenantId } from '@teleflow/dal';

export class CreateTenantResponseDto {
  @ApiProperty()
  _id: TenantId;

  @ApiProperty()
  identifier: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  data?: TenantCustomData;

  @ApiProperty()
  _environmentId: EnvironmentId;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;
}
