import { Tabs } from 'expo-router';
import { ChartColumn, ClipboardList, House, Moon } from 'lucide-react-native';
import { useColorScheme } from '@/shared/lib';
import { THEME } from '@/shared/theme';

/** Four destinations, each with an icon and a label (UI-Pedia Rules 5, 36). */
export default function TabsLayout() {
  const { colorScheme } = useColorScheme();
  const colors = THEME[colorScheme];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        // lineHeight keeps descenders (g, y) from being clipped.
        tabBarLabelStyle: { fontSize: 12, lineHeight: 16, fontWeight: '600' },
        tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.borderSubtle, minHeight: 64 },
        tabBarItemStyle: { paddingVertical: 6 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Nights', tabBarIcon: ({ color, size }) => <Moon color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="trends"
        options={{ title: 'Trends', tabBarIcon: ({ color, size }) => <ChartColumn color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="bedroom"
        options={{ title: 'Bedroom', tabBarIcon: ({ color, size }) => <House color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="study"
        options={{ title: 'Study', tabBarIcon: ({ color, size }) => <ClipboardList color={color} size={size} /> }}
      />
    </Tabs>
  );
}
