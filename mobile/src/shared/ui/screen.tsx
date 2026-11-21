import { ScrollView, View, type ViewProps } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';
import { cn } from '@/shared/lib/utils';

type ScreenProps = ViewProps & {
  /** Wrap content in a ScrollView (default true). */
  scroll?: boolean;
  /** Safe-area edges to pad. Headers already cover the top, so the default is none. */
  edges?: Edge[];
  contentClassName?: string;
};

/** Standard screen container: background, safe area, padding, optional scroll. */
function Screen({
  scroll = true,
  edges = [],
  className,
  contentClassName,
  children,
  ...props
}: ScreenProps) {
  const content = <View className={cn('flex-1 gap-4 p-4', contentClassName)}>{children}</View>;
  return (
    <SafeAreaView edges={edges} className={cn('flex-1 bg-background', className)} {...props}>
      {scroll ? (
        <ScrollView contentContainerClassName="grow" keyboardShouldPersistTaps="handled">
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}

export { Screen };
