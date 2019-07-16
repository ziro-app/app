import React from 'react'
import PropTypes from 'prop-types'
import { useRoutes } from 'hookrouter'
import { Login } from '../Login/index'
import { MyData } from '../MyData/index'

const privateRoutes = {
	'/': () => user => <MyData />,
	'/meus-dados': () => user => <MyData />
}

const publicRoutes = {
	'/*': () => <Login />
}

export const Router = ({ user, setUser }) => {
	if (user) {
		const match = useRoutes(privateRoutes)
		if (!match)
			return <div>Not found</div>
		return match(user)
	}
	return useRoutes(publicRoutes)
}

Router.propTypes = {
	user: PropTypes.object,
	setUser: PropTypes.func.isRequired
}