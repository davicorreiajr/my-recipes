import React from 'react'
import { SearchBar } from '../../widgets'
import styled from 'styled-components'

const StyledSearchBar = styled(SearchBar)`
  padding: ${({ theme }) => theme.spacing.base};
`

type Props = {
  onChange: Function
}

const TagsSearch = ({ onChange }: Props) => {
  return <StyledSearchBar placeholder="Tags" onChange={onChange} />
}

export default TagsSearch
