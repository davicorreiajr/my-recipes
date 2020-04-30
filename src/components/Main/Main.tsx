import React from 'react'
import '../../App.css'
import logo from '../../logo.svg'
import styled from 'styled-components'

const Container = styled.div`
  overflow-y: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`

const Main = () => {
  return (
    <Container>
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
