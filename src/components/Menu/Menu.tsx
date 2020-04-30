import React from 'react'
import styled from 'styled-components'
import { Tags } from '../Tags'

const Container = styled.div`
  padding: 1em;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
`

type Props = {
  className?: string
}

const Menu = ({ className }: Props) => {
  return (
    <Container className={className}>
      <p>All</p>
      <Tags />
    </Container>
  )
}

export default Menu
