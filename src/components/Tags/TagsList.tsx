import React from 'react'
import styled from 'styled-components'
import TagsItem from './TagsItem'

const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing.base};
  /* Height to show up to 7.5 items at first */
  max-height: 272px;
  overflow-y: auto;
`

type Props = {
  tags: string[]
}

const TagsList = ({ tags }: Props) => {
  return (
    <Container>
      {tags.map((tag, index) => (
        <TagsItem key={index} tag={tag} />
      ))}
    </Container>
  )
}

export default TagsList
