import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react-native';
import { View, type ViewProps } from 'react-native';
import { cn } from '@/shared/lib/utils';
import { Icon } from './icon';
import { Text, TextClassContext } from './text';

/**
 * shadcn: badge. custom: success | warning variants and an icon slot, so status is
 * never shown by colour alone (UI-Pedia Rule 75).
 */
const badgeVariants = cva('flex-row items-center self-start rounded-full', {
  variants: {
    variant: {
      default: 'bg-primary',
      secondary: 'bg-secondary',
      outline: 'border border-border',
      success: 'bg-success',
      warning: 'bg-warning',
    },
    size: {
      default: 'gap-1 px-2 py-0.5',
      lg: 'gap-1.5 px-3 py-1.5',
    },
  },
  defaultVariants: { variant: 'default', size: 'default' },
});

const badgeTextVariants = cva('font-medium', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      outline: 'text-foreground',
      success: 'text-success-foreground',
      warning: 'text-warning-foreground',
    },
    size: { default: 'text-xs', lg: 'text-sm' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
});

type BadgeProps = ViewProps & VariantProps<typeof badgeVariants> & { icon?: LucideIcon };

function Badge({ className, variant, size, icon, children, ...props }: BadgeProps) {
  const textClass = badgeTextVariants({ variant, size });
  return (
    <TextClassContext.Provider value={textClass}>
      <View className={cn(badgeVariants({ variant, size }), className)} {...props}>
        {icon ? (
          <Icon as={icon} size={size === 'lg' ? 16 : 12} strokeWidth={2.4} className={textClass} />
        ) : null}
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </View>
    </TextClassContext.Provider>
  );
}

export { Badge, badgeTextVariants, badgeVariants };
