import { ThemeController } from '@web3modal/core-react-native';
import { DarkTheme, LightTheme } from '@web3modal/ui-react-native';
import { useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { useSnapshot } from 'valtio';

export function useTheme() {
  const systemThemeMode = useColorScheme();
  const { themeMode, themeVariables } = useSnapshot(ThemeController.state);

  const _themeMode = useMemo(
    () => (themeMode === 'system' ? systemThemeMode : themeMode),
    [themeMode, systemThemeMode]
  );

  const baseTheme = useMemo(() => (_themeMode === 'dark' ? DarkTheme : LightTheme), [_themeMode]);

  const [theme, setTheme] = useState({ ...baseTheme, ...themeVariables });

  useEffect(() => {
    const newTheme = { ...baseTheme, ...themeVariables };
    setTheme(newTheme);
  }, [baseTheme, themeVariables]);

  return theme;
}
