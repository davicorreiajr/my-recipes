import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'

const Container = styled.div`
  position: relative;
`
const StyledLink = styled(Link)`
  display: block;
  cursor: pointer;
  color: ${props => props.theme.colors.black.default};
  font-family: 'Montserrat', sans-serif;
  font-size: 42px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing.halfBase} ${theme.spacing.base}`};
  /* margin-bottom: ${({ theme }) => theme.spacing.halfBase}; */
  border-bottom: 1px solid ${props => props.theme.colors.black.light};
  &:hover {
    color: ${props => props.theme.colors.black.default};
  }
`
const StyledLanguageSelector = styled(LanguageSelector)`
  position: absolute;
  top: 0;
  right: 0;
`

type Props = {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <Container className={className}>
      <StyledLink to="/">My Recipes</StyledLink>
      <StyledLanguageSelector />
    </Container>
  )
}

export default Header
