import { View, type ViewProps } from 'react-native';
import { cn } from '@/shared/lib/utils';
import { Text, TextClassContext } from './text';

function Card({ className, ...props }: ViewProps) {
  return (
    <TextClassContext.Provider value="text-card-foreground">
      <View
        className={cn(
          // custom: no border; soft shadow in light, lighter surface in dark (UI-Pedia Rules 56, 77, 84).
          'flex flex-col gap-6 rounded-2xl bg-card py-6 shadow-lg shadow-foreground/10 dark:shadow-none',
          className,
        )}
        {...props}
      />
    </TextClassContext.Provider>
  );
}

function CardHeader({ className, ...props }: ViewProps) {
  return <View className={cn('flex flex-col gap-1.5 px-6', className)} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<typeof Text>) {
  return (
    <Text
      role="heading"
      aria-level={3}
      className={cn('text-lg font-semibold leading-none', className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<typeof Text>) {
  return <Text className={cn('text-sm text-muted-foreground', className)} {...props} />;
}

function CardContent({ className, ...props }: ViewProps) {
  return <View className={cn('px-6', className)} {...props} />;
}

function CardFooter({ className, ...props }: ViewProps) {
  return <View className={cn('flex flex-row items-center px-6', className)} {...props} />;
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
