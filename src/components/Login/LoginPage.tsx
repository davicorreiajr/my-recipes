import React from 'react'
import { useAuth } from '../../hooks/Authentication'

const LoginPage = () => {
  const { isAuthenticated, login } = useAuth()

  return (
    <div>
      {!isAuthenticated && (
        <button
          onClick={() =>
            login({
              redirect_uri: 'http://localhost:3000/all',
            })
          }
        >
          Log in
        </button>
      )}
    </div>
  )
}

export default LoginPage
