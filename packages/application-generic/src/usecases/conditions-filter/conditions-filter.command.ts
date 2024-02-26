import { IsDefined } from 'class-validator';

import { StepFilter } from '@teleflow/dal';
import { IJob, INotificationTemplateStep } from '@teleflow/shared';

import { EnvironmentWithUserCommand } from '../../commands';
import { IFilterVariables } from '../../utils/filter-processing-details';

export class ConditionsFilterCommand extends EnvironmentWithUserCommand {
  @IsDefined()
  filters: StepFilter[];

  job?: IJob;

  step?: INotificationTemplateStep;

  variables?: IFilterVariables;
}
