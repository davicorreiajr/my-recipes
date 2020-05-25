import React from 'react'
import { useAuth } from '../../hooks/Authentication'

const LogoutPage = () => {
  const { logout } = useAuth()
  logout()
  return <div></div>
}

export default LogoutPage
