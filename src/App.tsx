import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import routes from './components/routes'

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
      <Router>
        <StyledHeader />
        <StyledMenu />
        <Content>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.component />}
            />
          ))}
        </Content>
      </Router>
    </Container>
  )
}

export default App
