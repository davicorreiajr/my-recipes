import React from 'react'
import styled, { css } from 'styled-components'
import { useLocation } from 'react-router-dom'
import { CustomNavLink } from '../../widgets'

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
const StyledCustomNavLink = styled(CustomNavLink)`
  ${textStyle}
`

type Props = {
  value: React.ReactNode
  path?: string
}

const MenuItem = ({ value, path = '' }: Props) => {
  const { search, pathname } = useLocation()
  const completePath = pathname + search
  const isActive = completePath === path

  return (
    <>
      {typeof value == 'object' ? (
        value
      ) : (
        <Container isActive={isActive}>
          {path ? (
            <StyledCustomNavLink
              to={path}
              isActive={(match, location) => {
                const { search, pathname } = location
                const completePath = pathname + search
                return completePath === path
              }}
            >
              {value}
            </StyledCustomNavLink>
          ) : (
            <Text>{value}</Text>
          )}
        </Container>
      )}
    </>
  )
}

export default MenuItem
