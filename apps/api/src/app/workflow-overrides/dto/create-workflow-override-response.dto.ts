import { OverrideResponseDto } from './shared';
import { ICreateWorkflowOverrideResponseDto } from '@teleflow/shared';

export class CreateWorkflowOverrideResponseDto
  extends OverrideResponseDto
  implements ICreateWorkflowOverrideResponseDto {}
