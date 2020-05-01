import React from 'react'
import styled from 'styled-components'
import { Tags } from '../Tags'
import MenuItem from './MenuItem'
import MenuIcon from './MenuIcon'

const Container = styled.div`
  position: relative;
`
const Content = styled.div<{ isOpen: boolean }>`
  border-right: 1px solid ${({ theme }) => theme.colors.black.light};
  margin: ${({ theme }) => theme.spacing.base} 0;
  width: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
  overflow: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`

type Props = {
  className?: string
  onToggleMenu: () => void
  isOpen: boolean
}

const Menu = ({ className, onToggleMenu, isOpen }: Props) => {
  const handleOnClick = () => {
    // eslint-disable-next-line no-console
    console.log('click no pai')
    onToggleMenu()
  }

  return (
    <Container className={className}>
      <MenuIcon onClick={handleOnClick} />
      <Content isOpen={isOpen}>
        <MenuItem value="All" path="/all" />
        <MenuItem value={<Tags />} />
        <MenuItem value="Feedback" />
      </Content>
    </Container>
  )
}

export default Menu
