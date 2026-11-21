import { Moon } from 'lucide-react-native';
import { View } from 'react-native';
import { useColorScheme } from '@/shared/lib';
import { Icon, Switch, Text } from '@/shared/ui';

/** Example feature slice: one user action (switch light/dark) with its own UI. */
export function ThemeToggleRow() {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  return (
    <View className="flex-row items-center justify-between py-4">
      <View className="flex-row items-center gap-3">
        <Icon as={Moon} className="size-5 text-muted-foreground" />
        <Text>Dark mode</Text>
      </View>
      <Switch
        checked={isDarkColorScheme}
        onCheckedChange={(checked) => setColorScheme(checked ? 'dark' : 'light')}
        accessibilityLabel="Dark mode"
      />
    </View>
  );
}
