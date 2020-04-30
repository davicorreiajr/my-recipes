import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type Props = {
  className?: string
}

const StyledLink = styled(Link)`
  display: block;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.85);
  font-family: 'Montserrat', sans-serif;
  font-size: 42px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-align: center;
  padding: 0.5em 0;
  margin-bottom: 0.5em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  &:hover {
    color: rgba(0, 0, 0, 0.85);
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
