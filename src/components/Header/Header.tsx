import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LanguageSelector } from '../LanguageSelector'
import { useTranslation } from '../../i18n'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.colors.black.light};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  @media ${({ theme }) => theme.devices.phone} {
    height: ${({ theme }) => theme.dimensions.headerHeight.xsmall};
  }
  @media ${({ theme }) => theme.devices.tabletPortrait} {
    height: ${({ theme }) => theme.dimensions.headerHeight.medium};
  }
  max-width: ${({ theme }) => theme.dimensions.pageWidth};
  margin: auto;
  padding: 0 ${({ theme }) => theme.spacing.base};
`
const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${props => props.theme.colors.black.default};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing.halfBase} ${theme.spacing.base}`};
  &:hover {
    color: ${props => props.theme.colors.black.default};
  }
  @media ${({ theme }) => theme.devices.phone} {
    font-size: calc(1rem * 2);
  }
  @media ${({ theme }) => theme.devices.tabletPortrait} {
    font-size: calc(1rem * 3);
  }
`
const StyledLanguageSelector = styled(LanguageSelector)`
  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.spacing.base};
  @media ${({ theme }) => theme.devices.phone} {
    display: none;
  }
  @media ${({ theme }) => theme.devices.laptopLarge} {
    right: 0;
  }
`

type Props = {
  className?: string
}

const Header = ({ className }: Props) => {
  const text = useTranslation('header.title')

  return (
    <Container className={className}>
      <StyledLink to="/">{text}</StyledLink>
      <StyledLanguageSelector />
    </Container>
  )
}

export default Header
