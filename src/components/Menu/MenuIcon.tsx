import React from 'react'
import styled from 'styled-components'
import { CloseOutlined } from '@ant-design/icons'

const StyledButton = styled.button`
  background-color: inherit;
  border: 1px solid red;
  padding: 0;
  width: 24px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes.default};
  box-shadow: none;
  outline: none;
  cursor: pointer;
  transition: color 0.2s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.default};
  }
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
      <CloseOutlined />
    </StyledButton>
  )
}

export default MenuIcon
