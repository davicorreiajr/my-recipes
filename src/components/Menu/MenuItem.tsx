import React from 'react'
import styled, { css } from 'styled-components'
import { blue } from '@ant-design/colors'
import { NavLink, useRouteMatch } from 'react-router-dom'

const Container = styled.div<{ isActive: boolean }>`
  padding: 1em;
  background-color: ${({ isActive }) => (isActive ? blue[0] : 'inherit')};
  border-right-width: ${({ isActive }) => (isActive ? '2px' : '0px')};
  border-right-style: solid;
  border-right-color: ${blue.primary};
  transition: background-color 0.2s ease-in, border-width 0.1s ease-in;
  .active {
    color: ${blue.primary};
  }
`
const textStyle = css`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.65);
`
const Text = styled.p`
  ${textStyle}
`
const StyledLink = styled(NavLink)`
  ${textStyle}
  display: block;
  cursor: pointer;
  transition: color 0.2s ease-in;
  &:hover {
    color: ${blue.primary};
  }
`

type Props = {
  value: React.ReactNode
  path?: string
}

const MenuItem = ({ value, path = '' }: Props) => {
  const match = useRouteMatch({
    path,
    exact: true,
  })
  const isActive = Boolean(match && path)

  return (
    <Container isActive={isActive}>
      {typeof value === 'object' ? (
        value
      ) : path ? (
        <StyledLink to={path}>{value}</StyledLink>
      ) : (
        <Text>{value}</Text>
      )}
    </Container>
  )
}

export default MenuItem
