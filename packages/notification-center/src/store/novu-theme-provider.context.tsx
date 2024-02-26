import React from 'react';
import { ITeleflowPopoverTheme, ITeleflowTheme, ThemeContext } from './teleflow-theme.context';
import { ColorScheme } from '../index';
import { getDefaultTheme } from '../utils/defaultTheme';

export interface ITeleflowThemePopoverProvider {
  light?: ITeleflowPopoverTheme;
  dark?: ITeleflowPopoverTheme;
  common?: ICommonTheme;
}

export interface ITeleflowThemeProvider {
  light?: ITeleflowTheme;
  dark?: ITeleflowTheme;
  common?: ICommonTheme;
}

export interface ICommonTheme {
  fontFamily?: string;
}

interface ITeleflowThemeProviderProps {
  children: React.ReactNode;
  colorScheme: ColorScheme;
  theme: ITeleflowThemeProvider;
}

export function TeleflowThemeProvider(props: ITeleflowThemeProviderProps) {
  const { theme, common } = getDefaultTheme({ colorScheme: props.colorScheme, theme: props.theme });

  return (
    <ThemeContext.Provider value={{ colorScheme: props.colorScheme, theme: { ...theme }, common: { ...common } }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
