import { IconName } from '@fortawesome/fontawesome-svg-core';
import { INotificationTemplate } from '@teleflow/shared';

export interface IBlueprintTemplate extends INotificationTemplate {
  iconName: IconName;
}
