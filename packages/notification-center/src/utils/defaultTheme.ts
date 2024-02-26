import merge from 'lodash.merge';
import cloneDeep from 'lodash.clonedeep';

import {
  defaultCommonTheme,
  defaultDarkTheme,
  defaultLightTheme,
  defaultNotificationBellDarkTheme,
  defaultNotificationBellLightTheme,
} from '../shared/config/themeDefaultValues';
import { ICommonTheme, ITeleflowThemeProvider } from '../store/teleflow-theme-provider.context';
import { INotificationBellColors, ITeleflowTheme } from '../store/teleflow-theme.context';
import { ColorScheme } from '../index';

interface IDefaultThemeProps {
  colorScheme?: ColorScheme;
  theme?: ITeleflowThemeProvider;
}

export function getDefaultTheme(props: IDefaultThemeProps): {
  theme: ITeleflowTheme;
  common: ICommonTheme;
} {
  const theme =
    props.colorScheme === 'light'
      ? merge(cloneDeep(defaultLightTheme), props?.theme?.light)
      : merge(cloneDeep(defaultDarkTheme), props?.theme?.dark);

  const common = merge(cloneDeep(defaultCommonTheme), props?.theme?.common);

  return {
    theme,
    common,
  };
}

interface IDefaultBellColors {
  colorScheme?: ColorScheme;
  bellColors: INotificationBellColors;
}

export function getDefaultBellColors(props: IDefaultBellColors): { bellColors: INotificationBellColors } {
  const colorScheme = props?.colorScheme ? props?.colorScheme : 'light';

  const bellColors =
    colorScheme === 'light'
      ? { ...cloneDeep(defaultNotificationBellLightTheme), bellColors: props?.bellColors }
      : { ...cloneDeep(defaultNotificationBellDarkTheme), bellColors: props?.bellColors };

  return {
    bellColors,
  };
}
