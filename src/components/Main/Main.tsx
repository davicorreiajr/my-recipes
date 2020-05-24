import React, { useState } from 'react'
import '../../App.css'
import logo from '../../logo.svg'
import styled from 'styled-components'
import { SearchBar } from '../../widgets'

const Container = styled.div`
  height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
`

const Main = () => {
  const [search, setSearch] = useState('')
  return (
    <Container>
      <SearchBar placeholder="Busque por receita" onChange={setSearch} />
      <p>{search}</p>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload!
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Container>
  )
}

export default Main
