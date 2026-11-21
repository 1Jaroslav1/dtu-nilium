import { Stack } from 'expo-router';
import { AppProviders } from '@/application';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  return (
    <AppProviders>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="night/[id]" options={{ title: 'Night', headerBackTitle: 'Nights' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
        <Stack.Screen name="+not-found" options={{ title: 'Not found' }} />
      </Stack>
    </AppProviders>
  );
}
