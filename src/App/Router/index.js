import React from 'react'
import PropTypes from 'prop-types'
import { useRoutes } from 'hookrouter'
import { Login } from '../Login/index'
import { MyData } from '../MyData/index'

const privateRoutes = {
	'/': () => user => <MyData user={user} />,
	'/meus-dados': () => user => <MyData user={user} />
}

const publicRoutes = {
	'/*': () => <Login />
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