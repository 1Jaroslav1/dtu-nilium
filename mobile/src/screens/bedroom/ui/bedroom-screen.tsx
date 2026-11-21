import { Link } from 'expo-router';
import { Check, Droplet, Plug, Thermometer } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';
import { COMFORT_RANGE, getHomeConnection, getRoomClimate, HumidityBadge } from '@/entities/room-climate';
import { useColorScheme } from '@/shared/lib';
import { THEME } from '@/shared/theme';
import { ActionRow, Badge, Card, CardContent, Icon, LineChart, Screen, Switch, Text } from '@/shared/ui';

type RuleKey = 'humidifier' | 'heat' | 'light';

const RULES: { key: RuleKey; title: string; detail: string }[] = [
  { key: 'humidifier', title: 'Humidifier on when dry', detail: 'Below 40% at night, off at 45%' },
  { key: 'heat', title: 'Warn me if it gets warm', detail: 'Notify when above 23 °C' },
  { key: 'light', title: 'Dim the device at night', detail: 'From 22:00 to 07:00' },
];

export function BedroomScreen() {
  const climate = getRoomClimate();
  const connection = getHomeConnection();
  const { colorScheme } = useColorScheme();
  const colors = THEME[colorScheme];
  const [rules, setRules] = useState<Record<RuleKey, boolean>>({ humidifier: true, heat: false, light: true });

  return (
    <Screen edges={['top']} contentClassName="gap-4 px-6 pb-6 pt-4">
      <View className="gap-1">
        <Text role="heading" aria-level={1} className="text-xl font-semibold">
          Bedroom
        </Text>
        <Text className="text-sm text-muted-foreground">Right now · updated {climate.updatedMinutesAgo} min ago</Text>
      </View>

      <Card className="gap-5">
        <CardContent className="gap-5">
          <View className="flex-row gap-4">
            <View className="flex-1 gap-1">
              <View className="flex-row items-center gap-1.5">
                <Icon as={Thermometer} size={16} className="text-muted-foreground" />
                <Text className="text-sm text-muted-foreground">Temperature</Text>
              </View>
              <Text className="text-xl font-semibold tabular-nums">{climate.temperatureC.toFixed(1)} °C</Text>
            </View>
            <View className="flex-1 gap-1">
              <View className="flex-row items-center gap-1.5">
                <Icon as={Droplet} size={16} className="text-muted-foreground" />
                <Text className="text-sm text-muted-foreground">Humidity</Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Text className="text-xl font-semibold tabular-nums">{climate.humidity}%</Text>
                <HumidityBadge percent={climate.humidity} />
              </View>
            </View>
          </View>

          <View className="gap-2">
            <Text className="text-sm font-medium">Humidity, last 24 hours</Text>
            <LineChart
              values={climate.humidityLast24h}
              min={25}
              max={65}
              color={colors.chart2}
              band={{ ...COMFORT_RANGE, color: colors.chart2Muted }}
              accessibilityLabel={`Humidity over the last 24 hours. Lowest ${Math.min(...climate.humidityLast24h)} percent overnight, now ${climate.humidity} percent.`}
            />
            <View className="flex-row justify-between">
              {['12:00', '18:00', '00:00', '06:00', 'Now'].map((t) => (
                <Text key={t} className="text-xs tabular-nums text-muted-foreground">
                  {t}
                </Text>
              ))}
            </View>
            <View className="flex-row items-center gap-1.5">
              <View className="size-3 rounded-sm border border-chart-2/40 bg-chart-2-muted" />
              <Text className="text-xs text-muted-foreground">
                Comfortable range, {COMFORT_RANGE.from}–{COMFORT_RANGE.to}%
              </Text>
            </View>
          </View>
        </CardContent>
      </Card>

      <Card className="gap-2">
        <CardContent className="gap-2">
          <Text role="heading" aria-level={2} className="mb-2 font-semibold">
            Automations
          </Text>
          {RULES.map((r) => (
            <View key={r.key} className="min-h-14 flex-row items-center gap-4">
              <View className="flex-1 gap-0.5">
                <Text className="font-medium">{r.title}</Text>
                <Text className="text-sm text-muted-foreground">{r.detail}</Text>
              </View>
              <Switch
                checked={rules[r.key]}
                onCheckedChange={(checked) => setRules((prev) => ({ ...prev, [r.key]: checked }))}
                accessibilityLabel={r.title}
                hitSlop={10}
              />
            </View>
          ))}
        </CardContent>
      </Card>

      <Card className="gap-3 pb-2">
        <CardContent className="gap-3">
          <View className="flex-row items-center gap-3">
            <View className="size-10 items-center justify-center rounded-lg bg-border-subtle">
              <Icon as={Plug} size={20} />
            </View>
            <View className="flex-1 gap-0.5">
              <Text className="font-medium">{connection.system}</Text>
              <Text className="text-sm text-muted-foreground">
                {connection.device} · last sync {connection.lastSync}
              </Text>
            </View>
            {connection.connected ? (
              <Badge variant="success" icon={Check}>
                Connected
              </Badge>
            ) : null}
          </View>
          <Link href="/bedroom" asChild>
            <ActionRow label="Manage devices" />
          </Link>
        </CardContent>
      </Card>
    </Screen>
  );
}
