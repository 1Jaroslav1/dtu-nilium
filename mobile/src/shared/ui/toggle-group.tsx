import { Platform, Pressable, View } from 'react-native';
import { cn } from '@/shared/lib/utils';
import { Text } from './text';

type ToggleGroupOption<T extends string> = { value: T; label: string };

type ToggleGroupProps<T extends string> = {
  value: T;
  onValueChange: (value: T) => void;
  options: ToggleGroupOption<T>[];
  accessibilityLabel: string;
  className?: string;
};

/**
 * shadcn: toggle-group (type="single"). For 2–4 options shown side by side
 * (UI-Pedia Rule 39). Selected changes background, colour and weight (Rule 52).
 */
function ToggleGroup<T extends string>({
  value,
  onValueChange,
  options,
  accessibilityLabel,
  className,
}: ToggleGroupProps<T>) {
  return (
    <View
      role="radiogroup"
      aria-label={accessibilityLabel}
      className={cn('flex-row gap-1 rounded-xl bg-secondary p-1', className)}
    >
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <Pressable
            key={option.value}
            role="radio"
            aria-checked={selected}
            onPress={() => onValueChange(option.value)}
            className={cn(
              'min-h-11 flex-1 items-center justify-center rounded-lg',
              selected && 'bg-card shadow-sm shadow-foreground/10',
              Platform.select({ web: 'outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50' }),
            )}
          >
            <Text
              className={cn(
                'text-sm',
                selected ? 'font-semibold text-primary' : 'font-medium text-muted-foreground',
              )}
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export { ToggleGroup };
export type { ToggleGroupOption };
