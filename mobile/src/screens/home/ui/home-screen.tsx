import { Link } from 'expo-router';
import { APP_CONFIG } from '@/shared/config';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Screen,
  Text,
} from '@/shared/ui';

/** Placeholder home: replace with real widgets as user flows are added. */
export function HomeScreen() {
  return (
    <Screen>
      <Text variant="h3">{APP_CONFIG.name}</Text>
      <Text variant="muted">The app shell is ready. User flows get added on top of it.</Text>

      <Card>
        <CardHeader>
          <CardTitle>Getting started</CardTitle>
          <CardDescription>Add a flow as a slice in src/features or src/screens.</CardDescription>
        </CardHeader>
        <CardContent>
          <Text className="text-sm leading-6">
            Routes live in src/app, screens in src/screens, and the shared UI kit in src/shared/ui.
          </Text>
        </CardContent>
        <CardFooter>
          <Link href="/settings" asChild>
            <Button className="flex-1">
              <Text>Open settings</Text>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </Screen>
  );
}
