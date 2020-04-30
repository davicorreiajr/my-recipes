import React from 'react'
import styled from 'styled-components'
import { Tags } from '../Tags'
import MenuItem from './MenuItem'

const Container = styled.div`
  padding-left: 1em;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
`

type Props = {
  className?: string
}

const Menu = ({ className }: Props) => {
  return (
    <Container className={className}>
      <MenuItem value={'All'} linkTo={'all'} />
      <MenuItem value={<Tags />} />
      <MenuItem value={'Feedback'} />
    </Container>
  )
}

export default Menu
