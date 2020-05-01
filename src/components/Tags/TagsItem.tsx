import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { CustomNavLink } from '../../widgets'

const Container = styled.div<{ isActive: boolean }>`
  ${props => props.theme.cssMenuItem(props.isActive)};
  padding: ${({ theme }) => `${theme.spacing.halfBase} ${theme.spacing.base}`};
`
type Props = {
  tag: string
}

const TagsItem = ({ tag }: Props) => {
  const location = useLocation()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const tagsQuery = query.get('tags') || ''
    const isActive = tagsQuery.includes(tag)
    setIsActive(isActive)
  }, [location, tag])

  return (
    <Container isActive={isActive}>
      <CustomNavLink
        to={`/all?tags=${tag}`}
        isActive={(match, location) => {
          const query = new URLSearchParams(location.search)
          const tagsQuery = query.get('tags') || ''
          return tagsQuery.includes(tag)
        }}
      >
        {tag}
      </CustomNavLink>
    </Container>
  )
}

export default TagsItem
