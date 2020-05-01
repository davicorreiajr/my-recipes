import React from 'react'
import styled from 'styled-components'
import { LeftOutlined } from '@ant-design/icons'

const StyledButton = styled.button`
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
  transition: color 0.2s ease-in, border-color 0.2s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.default};
    border-color: ${({ theme }) => theme.colors.primary.default};
  }
  position: absolute;
  right: -14px;
  top: -14px;
  z-index: 999;
  font-size: 14px;
`
const StyledIcon = styled(LeftOutlined)`
  margin-left: -2px;
`

type Props = {
  className?: string
  onClick: () => void
}

const MenuIcon = ({ className, onClick }: Props) => {
  const handleOnClick = () => {
    // eslint-disable-next-line no-console
    console.log('click')
    onClick()
  }

  return (
    <StyledButton onClick={handleOnClick}>
      <StyledIcon />
    </StyledButton>
  )
}

export default MenuIcon
