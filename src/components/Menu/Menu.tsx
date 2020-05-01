import React from 'react'
import styled from 'styled-components'
import { Tags } from '../Tags'
import MenuItem from './MenuItem'

const Container = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.black.light};
  margin: ${({ theme }) => theme.spacing.base} 0;
`

type Props = {
  className?: string
}

const Menu = ({ className }: Props) => {
  return (
    <Container className={className}>
      <MenuItem value="All" path="/all" />
      <MenuItem value={<Tags />} />
      <MenuItem value="Feedback" />
    </Container>
  )
}

export default Menu
