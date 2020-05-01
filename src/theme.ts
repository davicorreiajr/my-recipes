import { css } from 'styled-components'

const theme = {
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
}

export default theme
