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
  &:hover {
    color: ${({ theme }) => theme.colors.primary.default};
    border-color: ${({ theme }) => theme.colors.primary.default};
  }
  position: absolute;
  top: -14px;
  z-index: 999;
  font-size: 14px;
  transition: color 0.2s ease-in, border-color 0.2s ease-in,
    transform 1s ease-in-out;
  @media ${({ theme }) => theme.devices.phone} {
    ${({ isOpen }) =>
    isOpen &&
      css`
        transform: translateX(calc(100vw - 28px));
      `}
  }
  @media ${({ theme }) => theme.devices.tabletPortrait} {
    ${({ isOpen }) =>
    isOpen &&
      css`
        transform: translateX(calc(0.2 * 100vw - 14px));
      `}
  }
  @media ${({ theme }) => theme.devices.laptopLarge} {
    transform: ${({ isOpen, theme }) =>
    isOpen
      ? `translateX(calc(0.2 * ${theme.dimensions.pageWidth} - 14px))`
      : 'translateX(-14px)'};
  }
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
