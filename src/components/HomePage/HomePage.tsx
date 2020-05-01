import React from 'react'
import styled from 'styled-components'
import { RecipesFilters } from '../RecipesFilters'

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.base};
`

const HomePage = () => {
  return (
    <Container>
      <RecipesFilters />
      <p>Home Page</p>
    </Container>
  )
}

export default HomePage
