import { ApiProperty } from '@nestjs/swagger';
import { ICreateTenantDto, TenantCustomData } from '@teleflow/shared';

export class CreateTenantRequestDto implements ICreateTenantDto {
  @ApiProperty()
  identifier: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  data?: TenantCustomData;
}
