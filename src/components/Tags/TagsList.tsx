import React from 'react'
import styled from 'styled-components'
import TagsItem from './TagsItem'

const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing.base};
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
