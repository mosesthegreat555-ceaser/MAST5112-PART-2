export const colors = {
  background: '#0B0B0D',
  card: '#1C1C1E',
  cardBorder: '#2C2C2E',
  accent: '#0A84FF',
  accentSoft: 'rgba(10, 132, 255, 0.15)',
  textPrimary: '#FFFFFF',
  textSecondary: '#8E8E93',
  textTertiary: '#636366',
  divider: '#2C2C2E',
  danger: '#FF3B30',
  dangerSoft: 'rgba(255, 59, 48, 0.12)',
  starter: '#34C759',
  starterSoft: 'rgba(52, 199, 89, 0.15)',
  main: '#0A84FF',
  mainSoft: 'rgba(10, 132, 255, 0.15)',
  dessert: '#FF9F0A',
  dessertSoft: 'rgba(255, 159, 10, 0.15)',
  inputBackground: '#17171A',
  white: '#FFFFFF',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
};

export const typography = {
  h1: { fontSize: 28, fontWeight: '700' as const },
  h2: { fontSize: 22, fontWeight: '700' as const },
  body: { fontSize: 16, fontWeight: '400' as const },
  caption: { fontSize: 13, fontWeight: '500' as const },
  label: { fontSize: 12, fontWeight: '600' as const, letterSpacing: 0.5 },
};

export function courseColors(course: 'Starter' | 'Main' | 'Dessert') {
  switch (course) {
    case 'Starter':
      return { bg: colors.starterSoft, text: colors.starter };
    case 'Main':
      return { bg: colors.mainSoft, text: colors.main };
    case 'Dessert':
      return { bg: colors.dessertSoft, text: colors.dessert };
  }
}
