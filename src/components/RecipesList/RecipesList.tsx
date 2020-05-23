import React from 'react'
import RecipesItem from './RecipesItem'
import { Recipe } from '../../entities'

type Props = {
  recipes: Recipe[]
}

const RecipesList = ({ recipes }: Props) => {
  return (
    <>
      {recipes.map(recipe => (
        <RecipesItem key={recipe.id} recipe={recipe} />
      ))}
    </>
  )
}

export default RecipesList
