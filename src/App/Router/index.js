import React from 'react'
import { useRoutes } from 'hookrouter'
import { Login } from '../Login/index'

const routes = {
	'/': () => <Login />
}

export const Router = () => useRoutes(routes) || <div>Not found</div>