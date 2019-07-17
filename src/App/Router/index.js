import React from 'react'
import PropTypes from 'prop-types'
import { useRoutes } from 'hookrouter'
import { Header } from '../Header/index'
import { Login } from '../Login/index'
import { Register } from '../Register/index'
import { MyData } from '../MyData/index'


const privateRoutes = {
	'/': () => user => <MyData user={user} />,
	'/meus-dados': () => user => <MyData user={user} />
}

const publicRoutes = {
	'/login': () => <div><Header /><Login /></div>,
	'/cadastrar': () => <div><Header /><Register /></div>,
	'/*': () => <div><Header /><Login /></div>
}

export const Router = ({ user, setUser }) => {
	if (user) {
		const routeFound = useRoutes(privateRoutes)
		if (!routeFound)
			return <div>Not found</div>
		return routeFound(user)
	}
	return useRoutes(publicRoutes)
}

Router.propTypes = {
	user: PropTypes.object,
	setUser: PropTypes.func.isRequired
}