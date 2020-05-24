import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    dimensions: {
      pageWidth: string
      headerHeight: {
        xsmall: string
        medium: string
      }
    }
    spacing: {
      halfBase: string
      base: string
    }
    colors: {
      background: string
      primary: {
        light: string
        default: string
      }
      black: {
        light: string
        default: string
        dark: string
      }
    }
    fontSizes: {
      small: string
      default: string
      large: string
    }
    cssMenuItem: (
      isActive: boolean,
    ) => FlattenInterpolation<ThemeProps<DefaultTheme>>
    devices: {
      phone: string
      tabletPortrait: string
      tabletLandscape: string
      laptop: string
      laptopLarge: string
    }
  }
}

const theme: DefaultTheme = {
  dimensions: {
    pageWidth: '1200px',
    headerHeight: {
      xsmall: '60px',
      medium: '80px',
    },
  },
  spacing: {
    halfBase: '0.5rem',
    base: '1rem',
  },
  colors: {
    background: '#fafafa',
    primary: {
      light: 'rgba(24, 144, 255, 0.2)',
      default: 'rgb(24, 144, 255)',
    },
    black: {
      light: 'rgba(0, 0, 0, 0.15)',
      default: 'rgba(0, 0, 0, 0.65)',
      dark: 'rgba(0, 0, 0, 0.85)',
    },
  },
  fontSizes: {
    small: '12px',
    default: '14px',
    large: '16px',
  },
  cssMenuItem: (isActive: boolean) => css`
    padding: ${({ theme }) => theme.spacing.base};
    background-color: ${isActive ? '#e6f7ff' : 'inherit'};
    border-right-width: ${isActive ? '2px' : '0px'};
    border-right-style: solid;
    border-right-color: ${({ theme }) => theme.colors.primary.default};
    transition: background-color 0.2s ease-in, border-width 0.1s ease-in;
    .active {
      color: ${({ theme }) => theme.colors.primary.default};
    }
  `,
  devices: {
    phone: 'only screen and (max-width: 576px)',
    tabletPortrait: 'only screen and (min-width: 576px)',
    tabletLandscape: 'only screen and (min-width: 768px)',
    laptop: 'only screen and (min-width: 992px)',
    laptopLarge: 'only screen and (min-width: 1200px)',
  },
}

export default theme
