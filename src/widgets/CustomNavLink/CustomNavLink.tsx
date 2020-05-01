import React from 'react'
import styled from 'styled-components'
import { NavLink, NavLinkProps } from 'react-router-dom'

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black.default};
  display: block;
  cursor: pointer;
  transition: color 0.2s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.default};
  }
`

type Props = {
  className?: string
  to: string
  isActive?: NavLinkProps['isActive']
  children: React.ReactNode
}

const CustomNavLink = ({ className, to, isActive, children }: Props) => {
  return (
    <StyledNavLink className={className} to={to} isActive={isActive}>
      {children}
    </StyledNavLink>
  )
}

export default CustomNavLink
