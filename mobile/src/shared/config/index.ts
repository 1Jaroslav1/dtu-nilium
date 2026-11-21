import Constants from 'expo-constants';

export const APP_CONFIG = {
  name: Constants.expoConfig?.name ?? 'App',
  version: Constants.expoConfig?.version ?? '0.0.0',
} as const;
