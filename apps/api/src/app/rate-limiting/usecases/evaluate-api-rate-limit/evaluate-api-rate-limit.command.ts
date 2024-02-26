import { IsDefined, IsEnum } from 'class-validator';
import { ApiRateLimitCategoryEnum, ApiRateLimitCostEnum } from '@teleflow/shared';
import { EnvironmentCommand } from '../../../shared/commands/project.command';

export class EvaluateApiRateLimitCommand extends EnvironmentCommand {
  @IsDefined()
  @IsEnum(ApiRateLimitCategoryEnum)
  apiRateLimitCategory: ApiRateLimitCategoryEnum;

  @IsDefined()
  @IsEnum(ApiRateLimitCostEnum)
  apiRateLimitCost: ApiRateLimitCostEnum;
}
