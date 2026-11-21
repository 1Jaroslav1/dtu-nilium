import { cva, type VariantProps } from 'class-variance-authority';
import { Platform, Pressable } from 'react-native';
import { cn } from '@/shared/lib/utils';
import { TextClassContext } from './text';

const buttonVariants = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-2 rounded-md shadow-none',
    Platform.select({
      web: 'whitespace-nowrap outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none',
    }),
  ),
  {
    variants: {
      variant: {
        default: cn(
          'bg-primary shadow-sm shadow-black/5 active:bg-primary/90',
          Platform.select({ web: 'hover:bg-primary/90' }),
        ),
        destructive: cn(
          'bg-destructive shadow-sm shadow-black/5 active:bg-destructive/90',
          Platform.select({ web: 'hover:bg-destructive/90' }),
        ),
        outline: cn(
          'border border-border bg-background shadow-sm shadow-black/5 active:bg-accent',
          Platform.select({ web: 'hover:bg-accent' }),
        ),
        secondary: cn(
          'bg-secondary shadow-sm shadow-black/5 active:bg-secondary/80',
          Platform.select({ web: 'hover:bg-secondary/80' }),
        ),
        ghost: cn('active:bg-accent', Platform.select({ web: 'hover:bg-accent' })),
        link: '',
      },
      size: {
        default: 'h-11 px-4 py-2',
        sm: 'h-9 gap-1.5 px-3',
        lg: 'h-12 px-6',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

const buttonTextVariants = cva(
  cn(
    'text-sm font-medium text-foreground',
    Platform.select({ web: 'pointer-events-none transition-colors' }),
  ),
  {
    variants: {
      variant: {
        default: 'text-primary-foreground',
        destructive: 'text-destructive-foreground',
        outline: 'group-active:text-accent-foreground',
        secondary: 'text-secondary-foreground',
        ghost: 'group-active:text-accent-foreground',
        link: 'text-primary group-active:underline',
      },
      size: { default: '', sm: '', lg: 'text-base', icon: '' },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

type ButtonProps = React.ComponentProps<typeof Pressable> & VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, disabled, ...props }: ButtonProps) {
  return (
    <TextClassContext.Provider value={buttonTextVariants({ variant, size })}>
      <Pressable
        className={cn(disabled && 'opacity-50', buttonVariants({ variant, size }), className)}
        role="button"
        disabled={disabled}
        {...props}
      />
    </TextClassContext.Provider>
  );
}

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
