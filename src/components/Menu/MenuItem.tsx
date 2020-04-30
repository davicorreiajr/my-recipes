import React from 'react'
import styled from 'styled-components'
import { blue } from '@ant-design/colors'

const Container = styled.div`
  padding: 1em 0;
`
const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0.5em;
  cursor: pointer;
  transition: color 0.2s ease-in;
  &:hover {
    color: ${blue.primary};
  }
`

type Props = {
  value: React.ReactNode
}

const MenuItem = ({ value }: Props) => {
  return (
    <Container>
      {typeof value === 'object' ? value : <Text>{value}</Text>}
    </Container>
  )
}

export default MenuItem
