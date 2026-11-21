import { ThemeProvider } from 'expo-router';
import { PortalHost } from '@rn-primitives/portal';
import { StatusBar } from 'expo-status-bar';
import type { PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from '@/shared/lib';
import { NAV_THEME } from '@/shared/theme';

/**
 * Every app-wide provider goes here (query client, auth session, i18n, …),
 * so route layouts stay thin.
 */
export function AppProviders({ children }: PropsWithChildren) {
  const { colorScheme, isDarkColorScheme } = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider value={NAV_THEME[colorScheme]}>
          <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
          {children}
          {/* Target for dialogs, popovers and dropdowns from the UI kit. */}
          <PortalHost />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
