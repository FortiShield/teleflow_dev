import { useContext } from 'react';
import { ColorScheme, ICommonTheme } from '../index';
import { ITeleflowTheme, ThemeContext } from '../store/teleflow-theme.context';

export function useTeleflowTheme(): {
  theme: ITeleflowTheme;
  common: ICommonTheme;
  colorScheme: ColorScheme;
} {
  const { colorScheme, theme, common } = useContext(ThemeContext);

  return {
    colorScheme,
    theme,
    common,
  };
}
