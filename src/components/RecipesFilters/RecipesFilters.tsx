import React from 'react'
import styled from 'styled-components'
import RecipesSearch from './RecipesSearch'

const Container = styled.div`
  display: grid;
`

const RecipesFilters = () => {
  const handleOnChage = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(value)
  }

  return (
    <Container>
      <RecipesSearch onChange={handleOnChage} />
    </Container>
  )
}

export default RecipesFilters
