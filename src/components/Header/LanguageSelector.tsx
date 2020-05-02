import React from 'react'
import styled from 'styled-components'
import { Menu, Dropdown, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'

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
  const onClick = ({ key }: { key: string }) => {
    // eslint-disable-next-line no-console
    console.log('click on ', key)
  }

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd memu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  )

  return (
    <div className={className}>
      <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
        <StyledButton type="link">
          Click me <DownOutlined />
        </StyledButton>
      </Dropdown>
    </div>
  )
}

export default LanguageSelector
