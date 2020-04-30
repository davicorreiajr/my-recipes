import React from 'react'
import styled, { css } from 'styled-components'
import { blue } from '@ant-design/colors'
import { Link } from 'react-router-dom'

const Container = styled.div`
  padding: 1em 0;
`
const textStyle = css`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 0.5em;
`
const Text = styled.p`
  ${textStyle}
`
const StyledLink = styled(Link)`
  ${textStyle}
  display: block;
  cursor: pointer;
  transition: color 0.2s ease-in;
  &:hover {
    color: ${blue.primary};
  }
`

type Props = {
  value: React.ReactNode
  linkTo?: string
}

const MenuItem = ({ value, linkTo }: Props) => {
  return (
    <Container>
      {typeof value === 'object' ? (
        value
      ) : linkTo ? (
        <StyledLink to={linkTo}>{value}</StyledLink>
      ) : (
        <Text>{value}</Text>
      )}
    </Container>
  )
}

export default MenuItem
