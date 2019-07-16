import React from 'react'
import { useRoutes } from 'hookrouter'
import { Login } from '../Login/index'
import { MyData } from '../MyData/index'

const privateRoutes = {
	'/': () => <MyData />,
	'/meus-dados': () => <MyData />
}

const publicRoutes = {
	'/*': () => <Login />
}

const user = null

const routes = user ? privateRoutes : publicRoutes

export const Router = () => useRoutes(routes) || <div>Not found</div>