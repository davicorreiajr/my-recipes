import React, { useState, useEffect } from 'react'
import TagsSearch from './TagsSearch'
import TagsList from './TagsList'

const Tags = () => {
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    setTags(['rapido', 'carnes', 'sobremesa', 'acompanhementos'])
  }, [])

  return (
    <>
      <TagsSearch />
      <TagsList tags={tags} />
    </>
  )
}

export default Tags
