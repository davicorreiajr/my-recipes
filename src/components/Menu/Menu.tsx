import React from 'react'
import styled from 'styled-components'
import { Tags } from '../Tags'
import MenuItem from './MenuItem'
import MenuIcon from './MenuIcon'
import { useTranslation } from '../../i18n'

const Container = styled.div`
  position: relative;
`
const Content = styled.div<{ isOpen: boolean }>`
  border-right: 1px solid ${({ theme }) => theme.colors.black.light};
  margin: ${({ theme }) => theme.spacing.base} 0;
  width: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
  overflow: hidden;
  transition: width 1s ease-in-out;
`

type Props = {
  className?: string
  onToggleMenu: () => void
  isOpen: boolean
}

const Menu = ({ className, onToggleMenu, isOpen }: Props) => {
  const all = useTranslation('menu.all')

  return (
    <Container className={className}>
      <MenuIcon onClick={onToggleMenu} isOpen={isOpen} />
      <Content isOpen={isOpen}>
        <MenuItem value={all} path="/all" />
        <MenuItem value={<Tags />} />
        <MenuItem value="Feedback" />
      </Content>
    </Container>
  )
}

export default Menu
