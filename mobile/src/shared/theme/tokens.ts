/**
 * JS mirror of the CSS variables in src/application/styles/global.css.
 * Use only where className is not available (navigation theme, native props).
 * When you change a token, change it in both places.
 */
export const THEME = {
  light: {
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(0 0% 3.9%)',
    card: 'hsl(0 0% 100%)',
    primary: 'hsl(0 0% 9%)',
    mutedForeground: 'hsl(0 0% 45.1%)',
    border: 'hsl(0 0% 89.8%)',
    destructive: 'hsl(0 84.2% 60.2%)',
  },
  dark: {
    background: 'hsl(0 0% 3.9%)',
    foreground: 'hsl(0 0% 98%)',
    card: 'hsl(0 0% 3.9%)',
    primary: 'hsl(0 0% 98%)',
    mutedForeground: 'hsl(0 0% 63.9%)',
    border: 'hsl(0 0% 14.9%)',
    destructive: 'hsl(0 70.9% 59.4%)',
  },
} as const;
