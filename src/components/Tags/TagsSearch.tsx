import React from 'react'
import { SearchBar } from '../../widgets'
import styled from 'styled-components'
import { useTranslation } from '../../i18n'

const StyledSearchBar = styled(SearchBar)`
  padding: ${({ theme }) => theme.spacing.base};
`

type Props = {
  onChange: Function
}

const TagsSearch = ({ onChange }: Props) => {
  const placeholder = useTranslation('menu.tags.placeholder')
  return <StyledSearchBar placeholder={placeholder} onChange={onChange} />
}

export default TagsSearch
