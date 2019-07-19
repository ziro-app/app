import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, Redirect } from 'wouter'
import { Header } from '../Header/index'
import { Login } from '../Login/index'
import { Register } from '../Register/index'
import { MyData } from '../MyData/index'


const privateRoutes = {
	'/': user => <MyData user={user} />,
	'/meus-dados': user => <MyData user={user} />,
	'/login': () => <Redirect to={'/'} />
}

const publicRoutes = {
	'/login': <div><Header /><Login /></div>,
	'/cadastrar': <div><Header /><Register /></div>,
	'/': <div><Header /><Login /></div>
}

export const Router = ({ user, setUser, location }) => {
	if (user)
		if (privateRoutes[location])
			return privateRoutes[location](user)
		else return <div>Not found</div>
	else
		if (publicRoutes[location])
			return publicRoutes[location]
		else return <div>Not found</div>
}

Router.propTypes = {
	user: PropTypes.object,
	setUser: PropTypes.func.isRequired
}