import React from 'react'
import { useRoutes } from 'hookrouter'
import { Login } from '../Login/index'
import { MyData } from '../MyData/index'

const privateRoutes = {
	'/': () => user => <MyData />,
	'/meus-dados': () => user => <MyData />
}

const publicRoutes = {
	'/*': () => user => <Login />
}

export const Router = ({ user, setUser }) => {
	const routes = user ? privateRoutes : publicRoutes
	const match = useRoutes(routes)
	console.log(match)
	if (!match)
		return <div>Not found</div>
	return match(user)
}