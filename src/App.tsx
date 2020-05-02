import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import routes from './components/routes'
import { LanguageProvider } from './i18n'

const Container = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: auto;
  padding: 0 1em;
  height: 100vh;
`
const ContainerContent = styled.div`
  display: flex;
  flex-flow: row;
`
const StyledMenu = styled(Menu)<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '20%' : '0%')};
  transition: width 1s ease-in-out;
`
const Content = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '80%' : '100%')};
  transition: width 1s ease-in-out;
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
          <LanguageProvider>
            <Header />
            <ContainerContent>
              <StyledMenu
                onToggleMenu={handleOnToggleMenu}
                isOpen={isMenuOpen}
              />
              <Content isOpen={isMenuOpen}>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.component />}
                  />
                ))}
              </Content>
            </ContainerContent>
          </LanguageProvider>
        </ThemeProvider>
      </Router>
    </Container>
  )
}

export default App
