import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'wouter'
import { Home } from './Home/index'
import { Join } from './Join/index'
import { Register } from './Register/index'
import { MyData } from './MyData/index'
import { NotFound } from './NotFound/index'

export const Router = ({ isLogged }) => {
	const [location, setLocation] = useLocation()
	if (isLogged) {
		switch (location) {
			case '/meus-dados/fisica': return <MyData />
			case '/meus-dados/juridica': return <MyData />
			case '/login': setLocation('/meus-dados/fisica')
			default: return <NotFound fallback='/meus-dados/fisica' />
		}
	} else {
		switch (location) {
			case '/login': return <Home />
			case '/cadastrar': return <Join />
			case '/cadastrar/cnpj': return <Register />
			case '/cadastrar/dados': return <Register />
			case '/cadastrar/email': return <Register />
			case '/cadastrar/validar-email': return <Register />
			default: return null
		}
	}
}

Router.propTypes = {
	isLogged: PropTypes.bool.isRequired
}