import React, { useState } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`
const StyledIcon = styled(SearchOutlined)`
  margin-bottom: 0.5em;
  font-size: 16px;
  padding-right: 0.5em;
`
const StyledInput = styled(Input)`
  border: 0px;
  padding: 0.4em 0;
  margin-bottom: 0.5em;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.65);
  background-color: inherit;
  transition: border-color 0.2s ease;
  border-bottom: 1px solid #fafafa;
  &:focus {
    box-shadow: none;
    border-bottom-color: rgba(24, 144, 255, 0.2);
  }
  &:hover {
    border-bottom-color: rgba(24, 144, 255, 0.2);
  }
`

type Props = {
  onChange: Function
}

const TagsSearch = ({ onChange }: Props) => {
  const [inputValue, setInputValue] = useState()
  const [timer, setTimer] = useState(0)

  const handleOnChangeInput = (event: any) => {
    const value = event.target.value
    setInputValue(value)

    if (timer) clearTimeout(timer)

    setTimer(
      setTimeout(() => {
        onChange(value)
      }, 500),
    )
  }

  return (
    <Container>
      <StyledIcon />
      <StyledInput
        placeholder="Tags"
        value={inputValue}
        onChange={handleOnChangeInput}
      />
    </Container>
  )
}

export default TagsSearch
