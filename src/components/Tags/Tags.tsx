import React, { useState, useEffect } from 'react'
import TagsSearch from './TagsSearch'
import TagsList from './TagsList'

const MOCK_TAGS = ['rapido', 'carnes', 'sobremesa', 'acompanhementos']

const Tags = () => {
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    setTags(MOCK_TAGS)
  }, [])

  const handleOnChange = (value: string) => {
    if (!value) {
      setTags([...MOCK_TAGS])
      return
    }
    const newTags = tags.filter(tag => tag.includes(value))
    setTags(newTags)
  }

  return (
    <>
      <TagsSearch onChange={handleOnChange} />
      <TagsList tags={tags} />
    </>
  )
}

export default Tags
