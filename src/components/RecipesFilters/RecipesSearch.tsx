import React from 'react'
import { SearchBar } from '../../widgets'
import { useTranslation } from '../../i18n'

type Props = {
  onChange: Function
}

const RecipesSearch = ({ onChange }: Props) => {
  const placeholder = useTranslation('recipes.filters.searchBarPlaceholder')
  return <SearchBar placeholder={placeholder} onChange={onChange} />
}

export default RecipesSearch
