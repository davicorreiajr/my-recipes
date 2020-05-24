import React from 'react'
import styled from 'styled-components'
import { Tags } from '../Tags'
import MenuItem from './MenuItem'
import MenuIcon from './MenuIcon'
import { useTranslation } from '../../i18n'
import { LanguageSelector } from '../LanguageSelector'

const Container = styled.div<{ isOpen: boolean }>`
  height: calc(
    100% - ${({ theme }) => theme.dimensions.headerHeight.medium} -
      ${({ theme }) => theme.spacing.base}
  );
  position: fixed;
  z-index: 999;
  transition: width 1s ease-in-out;
  border-right: 1px solid ${({ theme }) => theme.colors.black.light};
  @media ${({ theme }) => theme.devices.phone} {
    border-right: none;
    width: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    max-height: calc(
      100% - ${({ theme }) => theme.dimensions.headerHeight.xsmall} -
        ${({ theme }) => theme.spacing.base}
    );
  }
  @media ${({ theme }) => theme.devices.tabletPortrait} {
    width: ${({ isOpen }) => (isOpen ? 'calc(0.2 * 100%)' : '0px')};
  }
  @media ${({ theme }) => theme.devices.laptopLarge} {
    width: ${({ isOpen, theme }) =>
    isOpen ? `calc(0.2 * ${theme.dimensions.pageWidth})` : '0px'};
  }
`
const Content = styled.div`
  max-height: 100%;
  padding-top: ${({ theme }) => theme.spacing.base};
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  @media ${({ theme }) => theme.devices.phone} {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black.light};
    box-shadow: 0 4px 2px -2px ${({ theme }) => theme.colors.black.light};
  }
`
const StyledLanguageSelector = styled(LanguageSelector)`
  text-align: right;
  margin: ${({ theme }) => `0 ${theme.spacing.base} ${theme.spacing.base} 0`};
  @media ${({ theme }) => theme.devices.tabletPortrait} {
    display: none;
  }
`

type Props = {
  className?: string
  onToggleMenu: () => void
  isOpen: boolean
}

const Menu = ({ className, onToggleMenu, isOpen }: Props) => {
  const all = useTranslation('menu.all')

  return (
    <Container className={className} isOpen={isOpen}>
      <MenuIcon onClick={onToggleMenu} isOpen={isOpen} />
      <Content>
        <MenuItem value={all} path="/all" />
        <MenuItem value={<Tags />} />
        <MenuItem value="Feedback" />
        <StyledLanguageSelector isMobile />
      </Content>
    </Container>
  )
}

export default Menu
