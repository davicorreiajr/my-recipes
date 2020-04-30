import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import './App.css'
import { Header } from './components/Header'
import { Menu } from './components/Menu'

const Container = styled.div`
  display: grid;
  grid-template:
    'header header header header' auto
    'menu content content content' auto
    / 1fr 1fr 1fr 1fr;
  max-width: 1000px;
  margin: auto;
  padding: 0 1em;
`
const StyledHeader = styled(Header)`
  grid-area: header;
`
const StyledMenu = styled(Menu)`
  grid-area: menu;
`
const Content = styled.div`
  grid-area: content;
`

function App() {
  return (
    <Container>
      <StyledHeader />
      <StyledMenu />
      <Content>
        <header className="App-header">
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
        </header>
      </Content>
    </Container>
  )
}

export default App
