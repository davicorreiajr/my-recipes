import React, { useState, useEffect, useContext } from 'react'
import createAuth0Client, {
  Auth0Client,
  RedirectLoginOptions,
  LogoutOptions,
  GetTokenSilentlyOptions,
} from '@auth0/auth0-spa-js'

//ToDo: Remove comments and try catch before deploying to production
// learn better later
const DEFAULT_REDIRECT_CALLBACK = (input: any) =>
  window.history.replaceState({}, document.title, window.location.pathname)

export const Auth0Context = React.createContext({
  isAuthenticated: false,
  user: undefined,
  isAuthLoading: false,
  login: (options?: RedirectLoginOptions) => {},
  getAuthToken: (options?: GetTokenSilentlyOptions): Promise<any> | undefined =>
    undefined,
  logout: (options?: LogoutOptions) => {},
})
export const useAuth = () => useContext(Auth0Context)

type Props = {
  children: React.ReactNode
  onRedirectCallback: (appState: any) => void
  domain: string
  clientId: string
  redirectUri: string
  audience: string
}

export const AuthProvider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  domain,
  clientId,
  redirectUri,
  audience,
}: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState()
  const [auth0Client, setAuth0] = useState<Auth0Client>()
  const [isAuthLoading, setIsAuthLoading] = useState(true)
  useEffect(() => {
    const initAuth0 = async () => {
      try {
        const auth0FromHook = await createAuth0Client({
          domain,
          client_id: clientId,
          redirect_uri: redirectUri,
          audience,
        })
        setAuth0(auth0FromHook)

        if (
          window.location.search.includes('code=') &&
          window.location.search.includes('state=')
        ) {
          const { appState } = await auth0FromHook.handleRedirectCallback()
          onRedirectCallback(appState)
        }

        const isAuthenticated = await auth0FromHook.isAuthenticated()
        setIsAuthenticated(isAuthenticated)

        if (isAuthenticated) {
          const user = await auth0FromHook.getUser()
          setUser(user)
        }
      } catch (err) {
        // eslint-disable-next-line
        console.log('error in authentication: ', err)
      } finally {
        setIsAuthLoading(false)
      }
    }
    initAuth0()
  }, [audience, clientId, domain, onRedirectCallback, redirectUri])

  // const loginWithPopup = async (params = {}) => {
  //   setPopupOpen(true)
  //   try {
  //     await auth0Client.loginWithPopup(params)
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     setPopupOpen(false)
  //   }
  //   const user = await auth0Client.getUser()
  //   setUser(user)
  //   setIsAuthenticated(true)
  // }

  // const handleRedirectCallback = async () => {
  //   setIsAuthLoading(true)
  //   await auth0Client.handleRedirectCallback()
  //   const user = await auth0Client.getUser()
  //   setIsAuthLoading(false)
  //   setIsAuthenticated(true)
  //   setUser(user)
  // }
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        isAuthLoading,
        // popupOpen,
        // loginWithPopup,
        // handleRedirectCallback,
        // getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        login: (...p) => auth0Client?.loginWithRedirect(...p),
        getAuthToken: (...p) => auth0Client?.getTokenSilently(...p),
        // getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client?.logout(...p),
      }}
    >
      {children}
    </Auth0Context.Provider>
  )
}
