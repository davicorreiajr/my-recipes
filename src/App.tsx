import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './theme'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import routes from './components/routes'
import { LanguageProvider } from './i18n'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.dimensions.pageWidth};
  margin: auto;
  height: 100vh;
  position: relative;
`
const ContainerContent = styled.div`
  height: 100%;
  @media ${({ theme }) => theme.devices.phone} {
    padding-top: ${({ theme }) => theme.dimensions.headerHeight.xsmall};
  }
  @media ${({ theme }) => theme.devices.tabletPortrait} {
    padding-top: ${({ theme }) => theme.dimensions.headerHeight.medium};
  }
`
const Content = styled.div<{ isOpen: boolean }>`
  margin-left: auto;
  height: 100%;
  overflow: auto;
  width: ${({ isOpen }) => (isOpen ? '80%' : '100%')};
  transition: width 1s ease-in-out;
  @media ${({ theme }) => theme.devices.phone} {
    width: 100%;
  }
`
const GlobalStyle = createGlobalStyle`
  body, div {
    color: ${({ theme }) => theme.colors.black.default};
    background-color: ${({ theme }) => theme.colors.background};
  }
`

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const handleOnToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router>
          <GlobalStyle />
          <LanguageProvider>
            <Header />
            <ContainerContent>
              <Menu onToggleMenu={handleOnToggleMenu} isOpen={isMenuOpen} />
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
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App
