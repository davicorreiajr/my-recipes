import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type Props = {
  className?: string
}

const StyledLink = styled(Link)`
  display: block;
  cursor: pointer;
  color: ${props => props.theme.colors.black.default};
  font-family: 'Montserrat', sans-serif;
  font-size: 42px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-align: center;
  padding: calc(${({ theme }) => theme.spacing.base} / 2)
    ${({ theme }) => theme.spacing.base};
  margin-bottom: calc(${({ theme }) => theme.spacing.base} / 2);
  border-bottom: 1px solid ${props => props.theme.colors.black.light};
  &:hover {
    color: ${props => props.theme.colors.black.default};
  }
`

const Header = ({ className }: Props) => {
  return (
    <div className={className}>
      <StyledLink to="/">My Recipes</StyledLink>
    </div>
  )
}

export default Header
