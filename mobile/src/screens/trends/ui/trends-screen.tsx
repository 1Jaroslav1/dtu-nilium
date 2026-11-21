import { ArrowDown, ArrowUp } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';
import { formatHour, getTrend, type TrendRange } from '@/entities/night';
import { Badge, BarChart, Card, CardContent, Screen, Text, ToggleGroup } from '@/shared/ui';

const RANGES: { value: TrendRange; label: string }[] = [
  { value: '7', label: '7 days' },
  { value: '30', label: '30 days' },
  { value: '90', label: '90 days' },
];

const SCALE_MAX = 18;

export function TrendsScreen() {
  const [range, setRange] = useState<TrendRange>('30');
  const trend = getTrend(range);
  const n = trend.nightlyCoughsPerHour.length;
  const gap = n <= 7 ? 10 : n <= 30 ? 3 : 1;
  const peakHours = trend.byHour
    .map((v, i) => ({ v, i }))
    .filter((x) => x.v > 14)
    .map((x) => x.i);
  const fewer = trend.changePct < 0;
  const maxGroup = Math.max(trend.dryNights.coughsPerHour, trend.comfortableNights.coughsPerHour);

  return (
    <Screen edges={['top']} contentClassName="gap-4 px-6 pb-6 pt-4">
      <View className="gap-1">
        <Text role="heading" aria-level={1} className="text-xl font-semibold">
          Trends
        </Text>
        <Text className="text-sm text-muted-foreground">Your coughs per hour while asleep</Text>
      </View>

      <ToggleGroup value={range} onValueChange={setRange} options={RANGES} accessibilityLabel="Time range" />

      <Card className="gap-4">
        <CardContent className="gap-4">
          <View className="gap-1">
            <Text className="text-sm text-muted-foreground">Average, last {n} nights</Text>
            <View className="flex-row items-baseline gap-2">
              <Text className="text-4xl font-bold tabular-nums">{trend.average.toFixed(1)}</Text>
              <Text className="text-muted-foreground">/ hour</Text>
            </View>
          </View>
          <Badge variant={fewer ? 'success' : 'warning'} size="lg" icon={fewer ? ArrowDown : ArrowUp}>
            {`${Math.abs(trend.changePct)}% ${fewer ? 'lower' : 'higher'} than the ${n} nights before`}
          </Badge>
          <View className="gap-2">
            <BarChart
              values={trend.nightlyCoughsPerHour}
              max={SCALE_MAX}
              reference={trend.average}
              height={120}
              gap={gap}
              accessibilityLabel={`Coughs per hour for each of the last ${n} nights, average ${trend.average}`}
            />
            <View className="flex-row justify-between">
              <Text className="text-xs text-muted-foreground">{trend.startLabel}</Text>
              <Text className="text-xs text-muted-foreground">– – average</Text>
              <Text className="text-xs text-muted-foreground">Last night</Text>
            </View>
          </View>
        </CardContent>
      </Card>

      <Card className="gap-4">
        <CardContent className="gap-4">
          <View className="gap-1">
            <Text role="heading" aria-level={2} className="font-semibold">
              When you cough most
            </Text>
            <Text className="text-sm text-muted-foreground">
              Usually between {formatHour(23 + peakHours[0])}:00 and {formatHour(23 + peakHours[peakHours.length - 1] + 1)}:00
            </Text>
          </View>
          <BarChart
            values={trend.byHour}
            max={16}
            highlight={peakHours}
            height={96}
            gap={8}
            accessibilityLabel="Average coughs per hour by hour of the night"
          />
          <View className="flex-row justify-between">
            {trend.byHour.map((_, i) => (
              <Text key={i} className="text-xs tabular-nums text-muted-foreground">
                {formatHour(23 + i)}
              </Text>
            ))}
          </View>
        </CardContent>
      </Card>

      <Card className="gap-4">
        <CardContent className="gap-4">
          <View className="gap-1">
            <Text role="heading" aria-level={2} className="font-semibold">
              Dry air and your cough
            </Text>
            <Text className="text-sm text-muted-foreground">
              Last 30 nights, by the lowest humidity in your bedroom
            </Text>
          </View>
          {[
            { label: `Dry nights, under 40% · ${trend.dryNights.nights} nights`, value: trend.dryNights.coughsPerHour, bar: 'bg-chart-1' },
            {
              label: `Comfortable, 40–60% · ${trend.comfortableNights.nights} nights`,
              value: trend.comfortableNights.coughsPerHour,
              bar: 'bg-chart-2',
            },
          ].map((row) => (
            <View key={row.label} className="gap-1.5">
              <View className="flex-row justify-between gap-2">
                <Text className="flex-1 text-sm">{row.label}</Text>
                <Text className="text-sm font-semibold tabular-nums">{row.value.toFixed(1)}</Text>
              </View>
              <View className="h-3 rounded-full bg-border-subtle">
                <View className={`h-3 rounded-full ${row.bar}`} style={{ width: `${(row.value / maxGroup) * 100}%` }} />
              </View>
            </View>
          ))}
          <Text className="text-xs leading-5 text-muted-foreground">
            Coughs per hour. A pattern in your own nights, not a medical finding. Talk to your study team before changing
            treatment.
          </Text>
        </CardContent>
      </Card>
    </Screen>
  );
}
