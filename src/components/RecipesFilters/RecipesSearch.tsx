import React from 'react'
import { SearchBar } from '../../widgets'
import styled from 'styled-components'

const StyledSearchBar = styled(SearchBar)`
  padding: ${({ theme }) => theme.spacing.base};
`

type Props = {
  onChange: Function
}

const RecipesSearch = ({ onChange }: Props) => {
  return (
    <StyledSearchBar placeholder="Search for recipes" onChange={onChange} />
  )
}

export default RecipesSearch
