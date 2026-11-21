import { View, type ViewProps } from 'react-native';
import { cn } from '@/shared/lib/utils';

type ProgressProps = ViewProps & {
  value: number;
  max?: number;
  indicatorClassName?: string;
};

/** shadcn: progress (determinate). */
function Progress({ value, max = 100, className, indicatorClassName, ...props }: ProgressProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <View
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={cn('h-2 w-full overflow-hidden rounded-full bg-border-subtle', className)}
      {...props}
    >
      <View className={cn('h-full rounded-full bg-chart-1', indicatorClassName)} style={{ width: `${pct}%` }} />
    </View>
  );
}

export { Progress };
