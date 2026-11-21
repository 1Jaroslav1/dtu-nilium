import { Stack, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { formatDuration, formatHour, formatNightRange, getNight } from '@/entities/night';
import { COMFORT_RANGE } from '@/entities/room-climate';
import { useColorScheme } from '@/shared/lib';
import { THEME } from '@/shared/theme';
import { BarChart, Card, CardContent, LineChart, Screen, Text } from '@/shared/ui';

const HUMIDITY_SCALE = { min: 30, max: 50 };

export function NightDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const night = getNight(id);
  const { colorScheme } = useColorScheme();
  const colors = THEME[colorScheme];

  if (!night) {
    return (
      <Screen contentClassName="px-6 py-6">
        <Stack.Screen options={{ title: 'Night' }} />
        <Text>We couldn’t find this night. Go back and pick another one.</Text>
      </Screen>
    );
  }

  const peak = Math.max(...night.hourlyCoughs);
  const peakIndex = night.hourlyCoughs.indexOf(peak);
  const peakHour = night.firstHour + peakIndex;
  const lowestHumidity = Math.min(...night.hourlyHumidity);
  const hours = night.hourlyCoughs.map((_, i) => formatHour(night.firstHour + i));

  const stats = [
    { label: 'Coughs', value: String(night.coughs) },
    { label: 'Per hour', value: night.coughsPerHour.toFixed(1) },
    { label: 'Worst hour', value: `${formatHour(peakHour)}–${formatHour(peakHour + 1)}` },
  ];

  return (
    <Screen contentClassName="gap-4 px-6 pb-6 pt-4">
      <Stack.Screen options={{ title: 'Night' }} />
      <View className="gap-1">
        <Text role="heading" aria-level={1} className="text-xl font-semibold">
          Night of {formatNightRange(night.date)}
        </Text>
        <Text className="text-sm text-muted-foreground">
          Asleep {night.asleepFrom} – {night.asleepTo} · {formatDuration(night.asleepMinutes)}
        </Text>
      </View>

      <View className="flex-row gap-2">
        {stats.map((s) => (
          <Card key={s.label} className="flex-1 gap-1 rounded-xl px-4 py-4">
            <Text className="text-xs text-muted-foreground">{s.label}</Text>
            <Text className="text-xl font-semibold tabular-nums">{s.value}</Text>
          </Card>
        ))}
      </View>

      <Card className="gap-4">
        <CardContent className="gap-4">
          <Text role="heading" aria-level={2} className="font-semibold">
            Coughs by hour
          </Text>
          <View
            role="img"
            aria-label={`Coughs per hour peak at ${peak} between ${formatHour(peakHour)}:00 and ${formatHour(peakHour + 1)}:00. Lowest humidity ${lowestHumidity} percent.`}
            className="relative"
          >
            <BarChart
              values={night.hourlyCoughs}
              max={40}
              highlight={[peakIndex]}
              height={128}
              gap={8}
              accessibilityLabel="Coughs per hour"
            />
            <View className="absolute inset-0">
              <LineChart
                values={night.hourlyHumidity}
                min={HUMIDITY_SCALE.min}
                max={HUMIDITY_SCALE.max}
                color={colors.chart2}
                dashedAt={COMFORT_RANGE.from}
                height={128}
                align="slots"
              />
            </View>
          </View>
          <View className="flex-row justify-between">
            {hours.map((h) => (
              <Text key={h} className="text-xs tabular-nums text-muted-foreground">
                {h}
              </Text>
            ))}
          </View>
          <View className="flex-row flex-wrap gap-4">
            <View className="flex-row items-center gap-1.5">
              <View className="size-3 rounded-sm bg-chart-1" />
              <Text className="text-xs text-muted-foreground">Coughs</Text>
            </View>
            <View className="flex-row items-center gap-1.5">
              <View className="h-[3px] w-4 rounded-full bg-chart-2" />
              <Text className="text-xs text-muted-foreground">Humidity</Text>
            </View>
            <View className="flex-row items-center gap-1.5">
              <View className="w-4 border-t-2 border-dashed border-chart-2" />
              <Text className="text-xs text-muted-foreground">{COMFORT_RANGE.from}% (dry below)</Text>
            </View>
          </View>
        </CardContent>
      </Card>

      {night.events.length > 0 ? (
        <Card className="gap-4">
          <CardContent className="gap-4">
            <Text role="heading" aria-level={2} className="font-semibold">
              What happened
            </Text>
            <View role="list" className="gap-4">
              {night.events.map((e) => (
                <View key={e.time} role="listitem" className="flex-row gap-3">
                  <Text className="w-12 text-sm font-semibold tabular-nums">{e.time}</Text>
                  <Text className="flex-1 text-sm leading-5">{e.text}</Text>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>
      ) : null}
    </Screen>
  );
}
