import React, { useState, useReducer } from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import { SearchOutlined, CloseOutlined } from '@ant-design/icons'

const Container = styled.div<{ isActive: boolean }>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  transition: border-color 0.2s ease-in;
  border-bottom-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary.light : theme.colors.background};
`
const StyledIcon = styled(SearchOutlined)<{ isActive: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.large};
  padding-right: 0.5em;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary.default : theme.colors.black.default};
  transition: color 0.2s ease-in;
`
const StyledInput = styled(Input)`
  border: none;
  padding: 0.4em 0;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black.default};
  background-color: inherit;
  &:focus {
    box-shadow: none;
    border: none;
  }
  &:hover {
    border: none;
  }
`
const StyledButton = styled.button`
  background-color: inherit;
  border: none;
  padding: 0;
  width: 24px;
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
  placeholder: string
  onChange: Function
  value?: string | number
  className?: string
}

type State = {
  isFocused: boolean
  isHovered: boolean
}

type Action = {
  type: string
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
  case 'onFocus':
    return { ...state, isFocused: true }
  case 'onBlur':
    return { ...state, isFocused: false }
  case 'onMouseEnter':
    return { ...state, isHovered: true }
  case 'onMouseLeave':
    return { ...state, isHovered: false }
  default:
    throw new Error(`Action type ${action.type} not recognized.`)
  }
}

const SearchBar = ({ placeholder, value = '', onChange, className }: Props) => {
  const initialState: State = { isFocused: false, isHovered: false }
  const [state, dispatch] = useReducer(reducer, initialState)
  const [inputValue, setInputValue] = useState(value)
  const [timer, setTimer] = useState(0)

  const handleOnChangeInput = (event: any) => {
    const value = event.target.value
    setInputValue(value)
    clearTimeout(timer)
    setTimer(setTimeout(() => onChange(value), 500))
  }

  const handleOnClear = () => {
    clearTimeout(timer)
    setInputValue('')
    onChange('')
  }

  const { isFocused, isHovered } = state
  const isActive = isFocused || isHovered

  return (
    <div className={className}>
      <Container
        isActive={isActive}
        onMouseEnter={() => dispatch({ type: 'onMouseEnter' })}
        onMouseLeave={() => dispatch({ type: 'onMouseLeave' })}
      >
        <StyledIcon isActive={isActive} />
        <StyledInput
          placeholder={placeholder}
          value={inputValue}
          onChange={handleOnChangeInput}
          onFocus={() => dispatch({ type: 'onFocus' })}
          onBlur={() => dispatch({ type: 'onBlur' })}
        />
        {inputValue && (
          <StyledButton onClick={handleOnClear}>
            <CloseOutlined />
          </StyledButton>
        )}
      </Container>
    </div>
  )
}

export default SearchBar
