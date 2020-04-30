import React from 'react'

type Props = {
  className?: string
}

const Header = ({ className }: Props) => {
  return <h1 className={className}>Recipes</h1>
}

export default Header
