import { OverrideResponseDto } from './shared';
import { IGetWorkflowOverridesResponseDto } from '@teleflow/shared';
import { ApiProperty } from '@nestjs/swagger';

export class GetWorkflowOverridesResponseDto implements IGetWorkflowOverridesResponseDto {
  @ApiProperty()
  hasMore: boolean;

  @ApiProperty()
  data: OverrideResponseDto[];

  @ApiProperty()
  pageSize: number;

  @ApiProperty()
  page: number;
}
