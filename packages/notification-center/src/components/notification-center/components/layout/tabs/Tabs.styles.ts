import { createStyles, MantineTheme } from '@mantine/core';
import { ITeleflowTheme } from '../../../../../store/teleflow-theme.context';
import { ICommonTheme } from '../../../../../store/teleflow-theme-provider.context';
import { colors } from '../../../../../shared/config/colors';

export default createStyles(
  (
    theme: MantineTheme,
    { teleflowTheme, common, colorScheme }: { teleflowTheme: ITeleflowTheme; common: ICommonTheme; colorScheme: 'light' | 'dark' },
    getRef
  ) => {
    const tabLabel = getRef('tabLabel');
    const tabIcon = getRef('tabIcon');

    return {
      tabsList: {
        gap: '30px',
        padding: '15px',
        paddingBottom: 0,
        borderBottom: `1px solid ${colorScheme === 'dark' ? colors.B20 : colors.B98}`,
      },

      tab: {
        display: 'block',
        cursor: 'pointer',
        borderBottom: 'none',
        marginBottom: '0',
        padding: '0px',
        height: '36px',
        [`.mantine-Badge-root`]: {
          background: 'transparent',
          border: `1px solid ${colors.B60}`,
          color: colors.B60,
        },

        '&:hover': {
          background: 'none',

          [`& .${tabIcon}`]: {
            color: teleflowTheme.header?.fontColor,
          },

          [`& .${tabLabel}`]: {
            color: teleflowTheme.header?.fontColor,
          },
        },
        ['&[data-active]']: {
          width: 'auto',
          [`.mantine-Badge-root`]: {
            background: teleflowTheme.header?.badgeColor,
            border: 'none',
            color: teleflowTheme.header?.badgeTextColor,
          },
          [`& .${tabLabel}`]: {
            color: teleflowTheme.header?.fontColor,

            '&::after': {
              content: '""',
              display: 'block',
              height: '2px',
              background: teleflowTheme?.header?.tabBorderColor || teleflowTheme.header?.badgeColor,
              borderRadius: '10px',
            },
          },

          [`& .${tabIcon}`]: {
            color: 'red',
            background: teleflowTheme.header?.badgeColor,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
        },
      },

      tabLabel: {
        ref: tabLabel,
        fontFamily: common.fontFamily,
        fontSize: '14px',
        fontWeight: 700,
        color: colors.B60,
        textAlign: 'left',
      },

      tabIcon: {
        ref: tabIcon,

        display: 'block',
        fontSize: '26px',
        fontWeight: 700,
        marginBottom: '5px',
        color: colors.B60,
        textAlign: 'left',
      },
    };
  }
);
