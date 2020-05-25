import React, { useState } from 'react'
import { Router, Route, Redirect } from 'react-router-dom'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './theme'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import routes from './components/routes'
import { LanguageProvider } from './i18n'
import { useAuth } from './hooks/Authentication'
import { LoginPage } from './components/Login'
import { LogoutPage } from './components/Logout'
import customHistory from './utils/history'

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
  const { isAuthLoading, isAuthenticated } = useAuth()

  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const handleOnToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  if (isAuthLoading) {
    return <div>Loading...</div>
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router history={customHistory}>
          <GlobalStyle />
          <LanguageProvider>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/logout">
              <LogoutPage />
            </Route>
            {isAuthenticated ? (
              <>
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
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </LanguageProvider>
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App
