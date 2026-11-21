import { ThemeToggleRow } from '@/features/toggle-theme';
import { APP_CONFIG } from '@/shared/config';
import { Card, CardContent, Separator, Screen, Text } from '@/shared/ui';
import { View } from 'react-native';

export function SettingsScreen() {
  return (
    <Screen>
      <Card className="py-2">
        <CardContent className="gap-0">
          <ThemeToggleRow />
          <Separator />
          <View className="flex-row items-center justify-between py-4">
            <Text>Version</Text>
            <Text variant="muted">{APP_CONFIG.version}</Text>
          </View>
        </CardContent>
      </Card>
    </Screen>
  );
}
