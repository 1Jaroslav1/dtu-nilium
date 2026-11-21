/**
 * JS mirror of the CSS variables in src/application/styles/global.css.
 * Use only where className is not available (navigation theme, SVG charts, native props).
 * When you change a token, change it in both places.
 */
export const THEME = {
  light: {
    background: 'hsl(228 71% 98.6%)',
    foreground: 'hsl(219 26% 28%)',
    card: 'hsl(0 0% 100%)',
    primary: 'hsl(244 76% 61.6%)',
    mutedForeground: 'hsl(218 15% 43.7%)',
    border: 'hsl(231 20% 87.3%)',
    borderSubtle: 'hsl(225 31% 94.9%)',
    destructive: 'hsl(355 69% 51%)',
    chart1: 'hsl(243 82% 67.3%)',
    chart1Muted: 'hsl(243 84% 90.2%)',
    chart2: 'hsl(187 69% 35.7%)',
    chart2Muted: 'hsl(186 51% 92.7%)',
  },
  dark: {
    background: 'hsl(0 0% 11.8%)',
    foreground: 'hsl(237 65% 94.3%)',
    card: 'hsl(0 0% 18.4%)',
    primary: 'hsl(237 55% 78.2%)',
    mutedForeground: 'hsl(227 17% 68.8%)',
    border: 'hsl(0 0% 29%)',
    borderSubtle: 'hsl(0 0% 24%)',
    destructive: 'hsl(355 70% 64%)',
    chart1: 'hsl(237 55% 78.2%)',
    chart1Muted: 'hsl(243 22% 36.1%)',
    chart2: 'hsl(187 50% 54%)',
    chart2Muted: 'hsl(188 33% 18.2%)',
  },
} as const;

export type ThemeColors = (typeof THEME)['light'];
