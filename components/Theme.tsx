/*
Apply theme according to https://www.nativewind.dev/guides/themes
*/

import { vars } from 'nativewind';
import { View } from 'react-native';
import { useColorScheme } from '~/lib/useColorScheme';

export const COLOR_SCHEME_THEME = {
  light: vars({
    '--color-background': '0 0% 100%',
    '--color-foreground': '222.2 84% 4.9%',
    '--color-card': '0 0% 100%',
    '--color-card-foreground': '222.2 84% 4.9%',
    '--color-popover': '0 0% 100%',
    '--color-popover-foreground': '222.2 84% 4.9%',
    '--color-primary': '221.2 83.2% 53.3%',
    '--color-primary-foreground': '210 40% 98%',
    '--color-secondary': '210 40% 96.1%',
    '--color-secondary-foreground': '222.2 47.4% 11.2%',
    '--color-muted': '210 40% 96.1%',
    '--color-muted-foreground': '215.4 16.3% 46.9%',
    '--color-accent': '210 40% 96.1%',
    '--color-accent-foreground': '222.2 47.4% 11.2%',
    '--color-success': '142 76% 36%',
    '--color-destructive': '0 84.2% 60.2%',
    '--color-destructive-foreground': '210 40% 98%',
    '--color-border': '214.3 31.8% 91.4%',
    '--color-input': '214.3 31.8% 91.4%',
    '--color-ring': '221.2 83.2% 53.3%',
    '--color-divider': '210 40% 90%',
  }),
  dark: vars({
    '--color-background': '222.2 84% 4.9%',
    '--color-foreground': '210 40% 98%',
    '--color-card': '222.2 84% 4.9%',
    '--color-card-foreground': '210 40% 98%',
    '--color-popover': '222.2 84% 4.9%',
    '--color-popover-foreground': '210 40% 98%',
    '--color-primary': '217.2 91.2% 59.8%',
    '--color-primary-foreground': '222.2 47.4% 11.2%',
    '--color-secondary': '217.2 32.6% 17.5%',
    '--color-secondary-foreground': '210 40% 98%',
    '--color-muted': '217.2 32.6% 17.5%',
    '--color-muted-foreground': '215 20.2% 65.1%',
    '--color-accent': '217.2 32.6% 17.5%',
    '--color-accent-foreground': '210 40% 98%',
    '--color-success': '141 71% 45%',
    '--color-destructive': '0 62.8% 30.6%',
    '--color-destructive-foreground': '210 40% 98%',
    '--color-border': '217.2 32.6% 17.5%',
    '--color-input': '217.2 32.6% 17.5%',
    '--color-ring': '224.3 76.3% 48%',
    '--color-divider': '217.2 32.6% 25%',
  }),
};

export default function Theme({ children }: { children: React.ReactNode }) {
  const { colorScheme } = useColorScheme();
  return (
    <View style={COLOR_SCHEME_THEME[colorScheme]} className="flex-1">
      {children}
    </View>
  );
}
