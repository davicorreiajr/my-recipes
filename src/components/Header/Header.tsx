import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.85);
  font-family: 'Montserrat', sans-serif;
  font-size: 42px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-align: center;
  padding: 0.5em 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`

const Header = ({ className }: Props) => {
  return (
    <div className={className}>
      <Title>My Recipes</Title>
    </div>
  )
}

export default Header
