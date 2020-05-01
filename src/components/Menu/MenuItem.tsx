import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink, useRouteMatch } from 'react-router-dom'

const Container = styled.div<{ isActive: boolean }>`
  ${props => props.theme.cssMenuItem(props.isActive)}
`
const textStyle = css`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black.default};
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
    color: ${({ theme }) => theme.colors.primary.default};
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
    <>
      {typeof value == 'object' ? (
        value
      ) : (
        <Container isActive={isActive}>
          {path ? (
            <StyledLink to={path}>{value}</StyledLink>
          ) : (
            <Text>{value}</Text>
          )}
        </Container>
      )}
    </>
  )
}

export default MenuItem
