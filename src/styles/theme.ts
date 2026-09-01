export const theme = {
  colors: {
    navy: '#0F1B33',
    navyDeep: '#0A1226',
    gold: '#F7B500',
    goldLight: '#FFD34D',
    goldDark: '#DE9200',
    ink: '#101C33',
    muted: '#5A6579',
    line: '#E4E8EF',
    bg: '#FFFFFF',
    bgAlt: '#F6F8FB',
    text: {
      light: '#DDE4F0',
      lighter: '#C7D1E3',
      lightest: '#EAEFF8',
      muted: '#B9C3D6',
    },
  },
  gradients: {
    gold: 'linear-gradient(135deg,#DE9200 0%,#F7B500 45%,#FFD34D 100%)',
    goldHero: 'linear-gradient(160deg,#0F1B33 0%,#0A1226 100%)',
  },
  shadows: {
    default: '0 18px 50px rgba(15,27,51,.10)',
    button: '0 10px 24px rgba(247,181,0,.32)',
  },
  radius: {
    default: '16px',
    pill: '999px',
    sm: '12px',
    lg: '20px',
  },
  spacing: {
    xs: '8px',
    sm: '14px',
    md: '22px',
    lg: '28px',
    xl: '56px',
    xxl: '86px',
  },
  breakpoints: {
    mobile: '640px',
    tablet: '960px',
    desktop: '1180px',
  },
  fonts: {
    family: '"Inter","Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    weight: {
      normal: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
} as const;

export type Theme = typeof theme;
