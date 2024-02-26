import { IsDefined, IsEnum, IsOptional, IsString } from 'class-validator';
import { ICreateOrganizationDto, JobTitleEnum, ProductUseCases, ProductUseCasesEnum } from '@teleflow/shared';

export class CreateOrganizationDto implements ICreateOrganizationDto {
  @IsString()
  @IsDefined()
  name: string;

  @IsString()
  @IsOptional()
  logo?: string;

  @IsOptional()
  @IsEnum(JobTitleEnum)
  jobTitle?: JobTitleEnum;

  @IsString()
  @IsOptional()
  domain?: string;

  @IsOptional()
  productUseCases?: ProductUseCases;
}
