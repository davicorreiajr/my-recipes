import React, { useState } from 'react'
import styled from 'styled-components'
import { RecipeFilters } from '../../entities'
import { RecipesFilters } from '../RecipesFilters'
import { RecipesList } from '../RecipesList'

const RECIPES_NAMES = [
  'Frango a milanesa',
  'Meatloaf',
  'Lasanha',
  'Molho Pesto',
  'Banana pancakes',
  'Hamburger',
  'Frango teryaki',
]

const MOCK_RECIPES = RECIPES_NAMES.map((recipeName, index) => ({
  id: index,
  name: recipeName,
}))

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.base};
`

const initialFilters: RecipeFilters = {
  nameOrIngredient: '',
}

const HomePage = () => {
  const [recipes, setRecipes] = useState(MOCK_RECIPES)
  const [filters, setFilters] = useState(initialFilters)

  const handleOnChange = (newFilters: RecipeFilters) => {
    // eslint-disable-next-line no-console
    console.log(newFilters)
    const { nameOrIngredient } = newFilters
    if (nameOrIngredient) {
      const newRecipes = MOCK_RECIPES.filter(({ name }) => {
        const lowerCaseName = name.toLowerCase()
        const lowerCaseFilter = nameOrIngredient.toLowerCase()
        return lowerCaseName.includes(lowerCaseFilter)
      })
      setRecipes(newRecipes)
    } else {
      setRecipes(MOCK_RECIPES)
    }
    setFilters(newFilters)
  }

  return (
    <Container>
      <RecipesFilters filters={filters} onChange={handleOnChange} />
      <RecipesList recipes={recipes} />
    </Container>
  )
}

export default HomePage
