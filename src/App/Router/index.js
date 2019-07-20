import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, Redirect } from 'wouter'
import { AnimatePresence } from 'framer-motion'
import { Header } from '../Header/index'
import { Login } from '../Login/index'
import { Register } from '../Register/index'
import { MyData } from '../MyData/index'
import { NotFound } from '../NotFound/index'

export const Router = ({ user, setUser, location }) => {
	const privateRoutes = {
		'/': user => <MyData user={user} />,
		'/meus-dados': user => <MyData user={user} />,
		'/login': () => <Redirect to={'/'} />
	}
	const publicRoutes = {
		'/login': <div><Header /><Login /></div>,
		'/cadastrar': <div><Header /><AnimatePresence>{location === '/cadastrar' && <Register />}</AnimatePresence></div>,
		'/': <div><Header /><Login /></div>
	}
	if (user)
		if (privateRoutes[location])
			return privateRoutes[location](user)
		else return <NotFound />
	else
		if (publicRoutes[location])
			return publicRoutes[location]
		else return <NotFound />
}

Router.propTypes = {
	user: PropTypes.object,
	setUser: PropTypes.func.isRequired
}