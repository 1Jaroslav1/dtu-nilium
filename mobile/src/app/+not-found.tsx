import { Link } from 'expo-router';
import { Button, Screen, Text } from '@/shared/ui';

export default function NotFoundScreen() {
  return (
    <Screen scroll={false} contentClassName="items-center justify-center gap-6">
      <Text variant="h3">This screen doesn’t exist.</Text>
      <Link href="/" asChild>
        <Button variant="outline">
          <Text>Go to home</Text>
        </Button>
      </Link>
    </Screen>
  );
}
