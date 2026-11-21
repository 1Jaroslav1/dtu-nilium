import type { LucideIcon, LucideProps } from 'lucide-react-native';
import { cssInterop } from 'nativewind';
import { cn } from '@/shared/lib/utils';

type IconProps = LucideProps & { as: LucideIcon; className?: string };

function IconImpl({ as: IconComponent, ...props }: IconProps) {
  return <IconComponent {...props} />;
}

cssInterop(IconImpl, {
  className: {
    target: 'style',
    nativeStyleToProp: { height: 'size', width: 'size' },
  },
});

/** Lucide icon styled with className, e.g. <Icon as={House} className="size-5 text-primary" />. */
function Icon({ as, className, size = 14, ...props }: IconProps) {
  return <IconImpl as={as} className={cn('text-foreground', className)} size={size} {...props} />;
}

export { Icon };
