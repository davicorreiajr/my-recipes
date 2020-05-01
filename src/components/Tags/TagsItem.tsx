import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div<{ isActive: boolean }>`
  ${props => props.theme.cssMenuItem(props.isActive)};
  padding: calc(${({ theme }) => theme.spacing.base} / 2)
    ${({ theme }) => theme.spacing.base};
`
const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black.default};
  display: block;
  cursor: pointer;
  transition: color 0.2s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.default};
  }
  .active {
    color: none;
  }
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
      <StyledLink
        to={`/all?tags=${tag}`}
        isActive={(match, location) => {
          const query = new URLSearchParams(location.search)
          const tagsQuery = query.get('tags') || ''
          return tagsQuery.includes(tag)
        }}
      >
        {tag}
      </StyledLink>
    </Container>
  )
}

export default TagsItem
