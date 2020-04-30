import React from 'react'
import TagsItem from './TagsItem'

type Props = {
  tags: string[]
}

const TagsList = ({ tags }: Props) => {
  return (
    <div>
      {tags.map((tag, index) => (
        <TagsItem key={index} tag={tag} />
      ))}
    </div>
  )
}

export default TagsList
