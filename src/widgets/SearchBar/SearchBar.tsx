import React, { useState, useReducer } from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { blue } from '@ant-design/colors'

const Container = styled.div<{ isActive: boolean }>`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  border-bottom: 1px solid #fafafa;
  transition: border-color 0.2s ease-in;
  border-bottom-color: ${({ isActive }) =>
    isActive ? 'rgba(24, 144, 255, 0.2)' : '#fafafa;'};
`
const StyledIcon = styled(SearchOutlined)<{ isActive: boolean }>`
  font-size: 16px;
  padding-right: 0.5em;
  color: ${({ isActive }) => (isActive ? blue.primary : 'rgba(0, 0, 0, 0.65)')};
  transition: color 0.2s ease-in;
`
const StyledInput = styled(Input)`
  border: none;
  padding: 0.4em 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.65);
  background-color: inherit;
  &:focus {
    box-shadow: none;
    border: none;
  }
  &:hover {
    border: none;
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
      </Container>
    </div>
  )
}

export default SearchBar
