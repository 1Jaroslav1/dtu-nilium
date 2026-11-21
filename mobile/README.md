# Cough Tracker — mobile app

Expo (SDK 58) + Expo Router + TypeScript. The UI is built on **NativeWind** (Tailwind for React Native) and a **shadcn-style component kit** (React Native Reusables pattern): the component source lives in this repo, so the design is fully ours to change.

## Run

```bash
npm install
npm start          # Expo dev server — press a (Android), i (iOS) or w (web)
npm run web        # straight to the browser
npm run typecheck
npm run lint
```

Native libraries outside Expo Go need a development build: `npx expo run:android` or `eas build --profile development`.

## Structure (Feature-Sliced Design)

```
src/
  app/            Expo Router routes only — thin files that render a screen
  application/    app-wide setup: providers, global.css (design tokens)
  screens/        one folder per screen (FSD "pages" layer)
  widgets/        composite blocks reused across screens
  features/       user actions (e.g. toggle-theme, log-cough)
  entities/       business entities: types, data access, entity UI
  shared/
    ui/           design-system components (Button, Card, Text, Switch, …)
    lib/          cn(), hooks
    theme/        JS mirror of tokens + navigation theme
    config/       app constants
```

Imports flow downward only: `app → screens → widgets → features → entities → shared`. Every slice exposes a public API through its `index.ts`; import from that, not from its internals. Use the `@/` alias (`@/shared/ui`).

## Changing the design

- **Colours, radius**: `src/application/styles/global.css` (CSS variables for light and dark). Mirror any colour change in `src/shared/theme/tokens.ts`, which feeds the header and tab bar.
- **Component look**: edit the variants in `src/shared/ui/*.tsx` (they use `cva`).
- **New components**: follow the same pattern (Tailwind classes + `cn()` + `@rn-primitives/*` for behaviour). The shadcn/React Native Reusables catalogue is the reference; `components.json` is already set up for its CLI.

## Adding a user flow

1. Create the screen in `src/screens/<flow>/ui/<flow>-screen.tsx` and export it from `src/screens/<flow>/index.ts`.
2. Add a route file in `src/app/` that re-exports it, e.g. `src/app/(tabs)/history.tsx` or a stack route `src/app/log/[id].tsx`.
3. Put the actions it needs in `src/features/<action>/` and the data models in `src/entities/<entity>/`.
4. For a new tab, register it in `src/app/(tabs)/_layout.tsx`.
