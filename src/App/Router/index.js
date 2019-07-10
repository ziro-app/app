import React from 'react'
import { useRoutes } from 'hookrouter'

const routes = {
	'/': () => <div>Login</div>
}

export const Router = () => useRoutes(routes) || <div>Not found</div>