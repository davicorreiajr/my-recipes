import React from 'react'
import { Recipe } from '../../entities'

type Props = {
  recipe: Recipe
}

const RecipesItem = ({ recipe }: Props) => {
  const { name } = recipe

  return (
    <>
      <p>{name}</p>
    </>
  )
}

export default RecipesItem
