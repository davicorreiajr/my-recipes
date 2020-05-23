import React from 'react'
import styled from 'styled-components'
import { RecipeFilters } from '../../entities'
import RecipesSearch from './RecipesSearch'

const Container = styled.div`
  display: grid;
`

type Props = {
  filters: RecipeFilters
  onChange: (filters: RecipeFilters) => void
}

const RecipesFilters = ({ filters, onChange }: Props) => {
  const handleOnChage = (value: string) => {
    const newFilters = {
      ...filters,
      nameOrIngredient: value,
    }
    onChange(newFilters)
  }

  return (
    <Container>
      <RecipesSearch onChange={handleOnChage} />
    </Container>
  )
}

export default RecipesFilters
