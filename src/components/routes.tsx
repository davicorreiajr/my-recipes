import React from 'react'
import { Main } from './Main'
import { HomePage } from './HomePage'

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Main />,
  },
  {
    path: '/all',
    component: () => <HomePage />,
  },
  {
    path: '/recipe',
    component: () => <h1>uma receita em especifico</h1>,
  },
]

export default routes
