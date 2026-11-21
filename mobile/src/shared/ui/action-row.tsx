import { ChevronRight } from 'lucide-react-native';
import { Platform, Pressable, type PressableProps } from 'react-native';
import { cn } from '@/shared/lib/utils';
import { Icon } from './icon';
import { Text } from './text';

type ActionRowProps = PressableProps & { label: string; className?: string };

/**
 * The one action at the bottom of a card (UI-Pedia Rules 33, 85): a 48px row with a
 * chevron. Wrap it in expo-router's <Link asChild> to navigate.
 */
function ActionRow({ label, className, ...props }: ActionRowProps) {
  return (
    <Pressable
      role="link"
      className={cn(
        'min-h-12 flex-row items-center justify-between border-t border-border-subtle active:opacity-70',
        Platform.select({ web: 'outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50' }),
        className,
      )}
      {...props}
    >
      <Text className="font-medium text-primary">{label}</Text>
      <Icon as={ChevronRight} size={20} className="text-primary" />
    </Pressable>
  );
}

export { ActionRow };
