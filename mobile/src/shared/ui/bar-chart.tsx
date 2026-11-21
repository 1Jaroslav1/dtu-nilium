import { View } from 'react-native';
import { cn } from '@/shared/lib/utils';

type BarChartProps = {
  values: number[];
  /** Upper end of the scale; defaults to the largest value. */
  max?: number;
  /** Indexes drawn in the strong colour; the rest are muted. */
  highlight?: number[];
  /** Draws a dashed reference line at this value (e.g. the average). */
  reference?: number;
  /** Chart height in px. */
  height?: number;
  gap?: number;
  accessibilityLabel: string;
  className?: string;
};

/** Simple vertical bar chart built from Views (chart-1 colours only). */
function BarChart({
  values,
  max,
  highlight = [],
  reference,
  height = 72,
  gap = 6,
  accessibilityLabel,
  className,
}: BarChartProps) {
  const top = max ?? Math.max(...values, 1);
  return (
    <View role="img" aria-label={accessibilityLabel} className={cn('relative', className)} style={{ height }}>
      <View className="absolute inset-0 flex-row items-end" style={{ gap }}>
        {values.map((v, i) => (
          <View
            key={i}
            className={cn('flex-1 rounded-t', highlight.includes(i) ? 'bg-chart-1' : 'bg-chart-1-muted')}
            style={{ height: `${Math.min(100, (v / top) * 100)}%` }}
          />
        ))}
      </View>
      {reference !== undefined ? (
        <View
          className="absolute left-0 right-0 border-t-2 border-dashed border-foreground"
          style={{ bottom: `${(reference / top) * 100}%` }}
        />
      ) : null}
    </View>
  );
}

export { BarChart };
