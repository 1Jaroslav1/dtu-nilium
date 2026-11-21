import { Tabs } from 'expo-router';
import { House, Settings } from 'lucide-react-native';
import { useColorScheme } from '@/shared/lib';
import { THEME } from '@/shared/theme';

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();
  const colors = THEME[colorScheme];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
