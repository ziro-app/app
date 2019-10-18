import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'wouter'
import { MyData } from './MyData/index'
import { CardCheckout } from './CardCheckout/index'
import { Home } from './Home/index'
import { Join } from './Join/index'
import { Register } from './Register/index'
import { CreatePayment } from './CreatePayment/index'
import { NotFound } from './NotFound/index'

export const Router = ({ isLogged }) => {
	const [location, setLocation] = useLocation()
	const rootPrivate = 'meus-dados/fisica'
	const rootPublic = '/login'
	if (isLogged) {
		switch (location) {
			case '/meus-dados/fisica': return <MyData />
			case '/meus-dados/juridica': return <MyData />
			case '/checkout': return <CardCheckout />
			case '/': setLocation(rootPrivate)
			case '/login': setLocation(rootPrivate)
			default: return <NotFound fallback={rootPrivate} />
		}
	} else {
		switch (location) {
			case '/login': return <Home />
			case '/cadastrar': return <Join />
			case '/cadastrar/cnpj': return <Register />
			case '/cadastrar/dados': return <Register />
			case '/cadastrar/email': return <Register />
			case '/cadastrar/validar-email': return <Register />
			case '/criar-cobranca': return <CreatePayment />
			case '/': setLocation(rootPublic)
			case '/meus-dados/fisica': setLocation(rootPublic)
			case '/meus-dados/juridica': setLocation(rootPublic)
			default: return <NotFound fallback={rootPublic} />
		}
	}
}

Router.propTypes = {
	isLogged: PropTypes.bool.isRequired
}