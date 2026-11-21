import { useColorScheme as useNativewindColorScheme } from 'nativewind';

export type ColorScheme = 'light' | 'dark';

export function useColorScheme() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useNativewindColorScheme();
  const scheme: ColorScheme = colorScheme === 'dark' ? 'dark' : 'light';
  return {
    colorScheme: scheme,
    isDarkColorScheme: scheme === 'dark',
    setColorScheme,
    toggleColorScheme,
  };
}
