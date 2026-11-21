import * as SwitchPrimitives from '@rn-primitives/switch';
import { Platform } from 'react-native';
import { cn } from '@/shared/lib/utils';

function Switch({ className, ...props }: SwitchPrimitives.RootProps) {
  return (
    <SwitchPrimitives.Root
      className={cn(
        'h-7 w-12 shrink-0 flex-row items-center rounded-full border border-transparent px-0.5',
        Platform.select({
          web: 'outline-none transition-all focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed',
        }),
        props.checked ? 'bg-primary' : 'bg-input',
        props.disabled && 'opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'size-6 rounded-full bg-background shadow-sm shadow-black/10',
          Platform.select({ web: 'pointer-events-none transition-transform' }),
          props.checked ? 'translate-x-5' : 'translate-x-0',
        )}
      />
    </SwitchPrimitives.Root>
  );
}

export { Switch };
