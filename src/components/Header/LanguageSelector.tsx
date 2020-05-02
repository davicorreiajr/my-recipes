import React from 'react'
import styled from 'styled-components'
import { Menu, Dropdown, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useLanguage, LANGUAGES } from '../../i18n'

const StyledButton = styled(Button)`
  padding-right: 0;
  color: ${({ theme }) => theme.colors.black.default};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.default};
  }
`

type Props = {
  className?: string
}

const LanguageSelector = ({ className }: Props) => {
  const { language, setLanguage } = useLanguage()
  const mapLanguagesToView = {
    [LANGUAGES.enUk]: 'English (UK)',
    [LANGUAGES.ptBr]: 'Português (BR)',
  }

  const onClick = ({ key }: any) => {
    if (key === language) return
    setLanguage(key)
  }

  const menu = (
    <Menu onClick={onClick}>
      {Object.entries(mapLanguagesToView).map(([key, value]) => (
        <Menu.Item key={key}>{value}</Menu.Item>
      ))}
    </Menu>
  )

  return (
    <div className={className}>
      <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
        <StyledButton type="link">
          {mapLanguagesToView[language]} <DownOutlined />
        </StyledButton>
      </Dropdown>
    </div>
  )
}

export default LanguageSelector
