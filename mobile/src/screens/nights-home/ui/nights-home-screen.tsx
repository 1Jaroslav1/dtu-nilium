import { Link } from 'expo-router';
import { ArrowDown, CircleCheck, Droplet, Thermometer } from 'lucide-react-native';
import { View } from 'react-native';
import {
  averageCoughsPerHour,
  formatDuration,
  formatMorning,
  formatShort,
  getLastNight,
  getRecentNights,
} from '@/entities/night';
import { getOvernightClimate, HumidityBadge } from '@/entities/room-climate';
import { ActionRow, Badge, BarChart, Card, CardContent, Icon, Screen, Text } from '@/shared/ui';

export function NightsHomeScreen() {
  const night = getLastNight();
  const recent = getRecentNights(14);
  const average = averageCoughsPerHour(recent);
  const belowPct = Math.round((1 - night.coughsPerHour / average) * 100);
  const climate = getOvernightClimate();

  return (
    <Screen edges={['top']} contentClassName="gap-4 px-6 pb-6 pt-4">
      <View className="gap-1">
        <Text className="text-sm text-muted-foreground">{formatMorning(night.date)}</Text>
        <Text role="heading" aria-level={1} className="text-xl font-semibold">
          Last night
        </Text>
      </View>

      <Card className="gap-4 pb-2">
        <CardContent className="gap-4">
          <View className="gap-1">
            <Text className="text-sm text-muted-foreground">Coughs per hour</Text>
            <View className="flex-row items-baseline gap-2">
              <Text className="text-4xl font-bold tabular-nums">{night.coughsPerHour.toFixed(1)}</Text>
              <Text className="text-muted-foreground">/ hour</Text>
            </View>
            <Text className="text-sm text-muted-foreground">
              {night.coughs} coughs · {formatDuration(night.asleepMinutes)} asleep
            </Text>
          </View>

          {belowPct > 0 ? (
            <Badge variant="success" size="lg" icon={ArrowDown}>
              {`${belowPct}% below your 14-night average`}
            </Badge>
          ) : null}

          <View className="gap-2">
            <BarChart
              values={recent.map((n) => n.coughsPerHour)}
              max={15}
              highlight={[recent.length - 1]}
              accessibilityLabel={`Coughs per hour for the last ${recent.length} nights. Last night: ${night.coughsPerHour}. Average: ${average}.`}
            />
            <View className="flex-row justify-between">
              <Text className="text-xs text-muted-foreground">{formatShort(recent[0].date)}</Text>
              <Text className="text-xs text-muted-foreground">Avg {average.toFixed(1)} / hour</Text>
              <Text className="text-xs text-muted-foreground">Last night</Text>
            </View>
          </View>

          <Link href={{ pathname: '/night/[id]', params: { id: night.id } }} asChild>
            <ActionRow label="See the whole night" />
          </Link>
        </CardContent>
      </Card>

      <Card className="gap-4 pb-2">
        <CardContent className="gap-4">
          <Text role="heading" aria-level={2} className="font-semibold">
            Your bedroom overnight
          </Text>
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
                <Text className="text-sm text-muted-foreground">Lowest humidity</Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Text className="text-xl font-semibold tabular-nums">{climate.lowestHumidity}%</Text>
                <HumidityBadge percent={climate.lowestHumidity} />
              </View>
            </View>
          </View>
          {climate.humidifierMinutes > 0 ? (
            <View className="flex-row items-center gap-2">
              <Icon as={CircleCheck} size={18} className="text-success-foreground" />
              <Text className="text-sm">Humidifier ran for {formatDuration(climate.humidifierMinutes)}</Text>
            </View>
          ) : null}
          <Link href="/bedroom" asChild>
            <ActionRow label="Bedroom settings" />
          </Link>
        </CardContent>
      </Card>

      <Text className="text-xs leading-5 text-muted-foreground">
        This is not a diagnosis. Your study team sees these counts. No audio is stored.
      </Text>
    </Screen>
  );
}
