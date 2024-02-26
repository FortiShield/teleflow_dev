import { IsEnum } from 'class-validator';
import { MemberRoleEnum } from '@teleflow/shared';

export class UpdateMemberRolesDto {
  @IsEnum(MemberRoleEnum)
  role: MemberRoleEnum.ADMIN;
}
