import { IsEnum, IsString } from 'class-validator';
import { PreferenceLevelEnum } from '@teleflow/dal';

export class GetSubscriberPreferencesByLevelParams {
  @IsEnum(PreferenceLevelEnum)
  level: PreferenceLevelEnum;

  @IsString()
  subscriberId: string;
}
