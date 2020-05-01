import React from 'react'
import { SearchBar } from '../../widgets'

type Props = {
  onChange: Function
}

const RecipesSearch = ({ onChange }: Props) => {
  return <SearchBar placeholder="Search for recipes" onChange={onChange} />
}

export default RecipesSearch
