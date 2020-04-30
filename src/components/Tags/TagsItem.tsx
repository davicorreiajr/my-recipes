import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { blue } from '@ant-design/colors'

const Container = styled.div<{ isActive: boolean }>`
  padding: 0.5em 1em;
  background-color: ${({ isActive }) => (isActive ? blue[0] : 'inherit')};
  border-right-width: ${({ isActive }) => (isActive ? '2px' : '0px')};
  border-right-style: solid;
  border-right-color: ${blue.primary};
  transition: background-color 0.2s ease-in, border-width 0.1s ease-in;
  .item-active {
    color: ${blue.primary};
  }
`
const StyledLink = styled(NavLink)`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.65);
  display: block;
  cursor: pointer;
  transition: color 0.2s ease-in;
  &:hover {
    color: ${blue.primary};
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
        activeClassName="item-active"
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
