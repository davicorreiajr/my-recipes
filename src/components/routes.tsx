import React from 'react'
import { Main } from './Main'

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Main />,
  },
  {
    path: '/all',
    component: () => <h1>todas as receitas</h1>,
  },
  {
    path: '/recipe',
    component: () => <h1>uma receita em especifico</h1>,
  },
]

export default routes
