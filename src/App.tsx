import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled, { ThemeProvider, css } from 'styled-components'
import theme from './theme'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import routes from './components/routes'

const gridWithMenu = css`
  grid-template:
    'header header header header header' auto
    'menu content content content content' 1fr
    / 1fr 1fr 1fr 1fr 1fr;
`
const gridWithoutMenu = css`
  grid-template:
    'header header' auto
    'menu content' 1fr
    / auto 1fr;
`
const Container = styled.div<{ isMenuOpen: boolean }>`
  display: grid;
  ${({ isMenuOpen }) => (isMenuOpen ? gridWithMenu : gridWithoutMenu)}
  max-width: 1000px;
  margin: auto;
  padding: 0 1em;
  height: 100vh;
`
const StyledHeader = styled(Header)`
  grid-area: header;
`
const StyledMenu = styled(Menu)`
  grid-area: menu;
`
const Content = styled.div`
  grid-area: content;
  overflow-y: auto;
`

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const handleOnToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Container isMenuOpen={isMenuOpen}>
      <Router>
        <ThemeProvider theme={theme}>
          <StyledHeader />
          <StyledMenu onToggleMenu={handleOnToggleMenu} isOpen={isMenuOpen} />
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
        </ThemeProvider>
      </Router>
    </Container>
  )
}

export default App
