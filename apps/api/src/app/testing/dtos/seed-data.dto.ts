import { UserEntity } from '@teleflow/dal';

export class SeedDataBodyDto {}

export interface ISeedDataResponseDto {
  token: string;
  user: UserEntity;
}
