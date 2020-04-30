import React from 'react'

type Props = {
  tag: string
}

const TagsItem = ({ tag }: Props) => {
  return (
    <div>
      <p>{tag}</p>
    </div>
  )
}

export default TagsItem
