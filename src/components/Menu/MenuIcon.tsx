import React from 'react'
import styled, { css } from 'styled-components'
import { RightOutlined } from '@ant-design/icons'

const StyledButton = styled.button<{ isOpen: boolean }>`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.black.default};
  padding: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes.default};
  box-shadow: none;
  outline: none;
  cursor: pointer;
  left: ${({ isOpen }) => (isOpen ? 'calc(100% - 14px)' : '-14px')};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.default};
    border-color: ${({ theme }) => theme.colors.primary.default};
  }
  position: absolute;
  right: -14px;
  top: -14px;
  z-index: 999;
  font-size: 14px;
  transition: color 1s ease-in, border-color 1s ease-in, left 1s ease-in-out;
`
const StyledIcon = styled(RightOutlined)<{ isOpen: boolean }>`
  transition: transform 1s ease-in, margin 1s ease-in;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(-180deg);
    `}
`

type Props = {
  className?: string
  onClick: () => void
  isOpen: boolean
}

const MenuIcon = ({ className, onClick, isOpen }: Props) => {
  return (
    <StyledButton onClick={onClick} isOpen={isOpen}>
      <StyledIcon isOpen={isOpen} />
    </StyledButton>
  )
}

export default MenuIcon
