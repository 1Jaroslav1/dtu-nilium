import { Link } from 'expo-router';
import { Check, CircleAlert, MicOff, Settings } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { getStudyEnrolment } from '@/entities/study';
import { Button, Card, CardContent, Icon, Progress, Screen, Text } from '@/shared/ui';

export function StudyScreen() {
  const study = getStudyEnrolment();
  const [paused, setPaused] = useState(false);
  const left = study.nightsTotal - study.nightsRecorded;

  return (
    <Screen edges={['top']} contentClassName="gap-4 px-6 pb-6 pt-4">
      <View className="flex-row items-start justify-between gap-2">
        <View className="flex-1 gap-1">
          <Text role="heading" aria-level={1} className="text-xl font-semibold">
            Your study
          </Text>
          <Text className="text-sm text-muted-foreground">
            {study.studyName} · Participant {study.participantCode}
          </Text>
        </View>
        <Link href="/settings" asChild>
          <Button variant="ghost" size="icon" aria-label="App settings">
            <Icon as={Settings} size={20} className="text-muted-foreground" />
          </Button>
        </Link>
      </View>

      <Card className="gap-3">
        <CardContent className="gap-3">
          <View className="flex-row items-baseline gap-2">
            <Text className="text-xl font-semibold tabular-nums">
              {study.nightsRecorded} of {study.nightsTotal}
            </Text>
            <Text className="text-muted-foreground">nights recorded</Text>
          </View>
          <Progress value={study.nightsRecorded} max={study.nightsTotal} aria-label="Nights recorded" />
          <Text className="text-sm text-muted-foreground">
            {left} nights to go · ends {study.endsOn}
          </Text>
          {study.missedNights.map((m) => (
            <View key={m.date} className="flex-row items-start gap-2 rounded-xl bg-warning p-3">
              <Icon as={CircleAlert} size={18} className="mt-0.5 text-warning-foreground" />
              <Text className="flex-1 text-sm leading-5 text-warning-foreground">
                1 night missed ({m.date}): {m.reason}.
              </Text>
            </View>
          ))}
        </CardContent>
      </Card>

      <Card className="gap-4">
        <CardContent className="gap-4">
          <View className="flex-row items-start gap-3">
            <View className="size-10 items-center justify-center rounded-lg bg-success">
              <Icon as={MicOff} size={20} className="text-success-foreground" />
            </View>
            <View className="flex-1 gap-1">
              <Text role="heading" aria-level={2} className="font-semibold">
                No audio is stored
              </Text>
              <Text className="text-sm leading-5 text-muted-foreground">
                The counter keeps only the time of each cough. Sound never leaves the device.
              </Text>
            </View>
          </View>
          <View className="gap-2">
            <Text className="text-sm font-semibold">Your study team sees</Text>
            <View role="list" className="gap-2">
              {study.sharedWithTeam.map((s) => (
                <View key={s} role="listitem" className="flex-row items-center gap-2">
                  <Icon as={Check} size={16} strokeWidth={2.4} className="text-success-foreground" />
                  <Text className="text-sm">{s}</Text>
                </View>
              ))}
            </View>
          </View>
        </CardContent>
      </Card>

      <View className="mt-auto gap-3">
        {paused ? (
          <View
            role="status"
            className="min-h-12 flex-row items-center justify-between gap-3 rounded-xl bg-foreground pl-4 pr-1"
          >
            <Text className="flex-1 text-sm text-background">Tonight’s recording is paused</Text>
            <Pressable
              role="button"
              onPress={() => setPaused(false)}
              className="min-h-11 justify-center rounded-lg px-3 active:opacity-70"
            >
              <Text className="text-sm font-semibold text-chart-1-muted">Undo</Text>
            </Pressable>
          </View>
        ) : null}
        {/* One primary action per view (UI-Pedia Rule 30); full width on mobile (Rule 98). */}
        {/* TODO: open the study-team contact flow once it exists. */}
        <Button size="lg" className="rounded-xl">
          <Text>Message study team</Text>
        </Button>
        {!paused ? (
          <Button variant="outline" size="lg" className="rounded-xl" onPress={() => setPaused(true)}>
            <Text>Pause tonight’s recording</Text>
          </Button>
        ) : null}
      </View>
    </Screen>
  );
}
