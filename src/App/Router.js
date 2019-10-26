import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'wouter'
import { Menu } from './Menu/index'
import { MyData } from './MyData/index'
import { MyPayments } from './MyPayments/index'
import { CardCheckout } from './CardCheckout/index'
import { Home } from './Home/index'
import { Join } from './Join/index'
import { Register } from './Register/index'
import { CreatePayment } from './CreatePayment/index'
import NotFound from '@bit/vitorbarbosa19.ziro.not-found'

export const Router = ({ isLogged, checkoutId }) => {
	const [location, setLocation] = useLocation()
	const rootPrivate = 'meus-dados/fisica'
	const rootPublic = '/login'
	if (isLogged && checkoutId) setLocation(`/checkout?id=${checkoutId}`)
	if (isLogged) {
		switch (location) {
			case '/meus-dados/fisica': return <Menu title='Meus dados'><MyData /></Menu>
			case '/meus-dados/juridica': return <Menu title='Meus dados'><MyData /></Menu>
			case '/pagamentos': return <Menu title='Meus pagamentos'><MyPayments /></Menu>
			case '/checkout': return <CardCheckout />
			case '/criar-cobranca': return <CreatePayment />
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
			case '/': setLocation(rootPublic)
			case '/meus-dados/fisica': setLocation(rootPublic)
			case '/meus-dados/juridica': setLocation(rootPublic)
			case '/pagamentos': setLocation(rootPublic)
			case '/checkout': setLocation(rootPublic)
			case '/criar-cobranca': setLocation(rootPublic)
			default: return <NotFound fallback={rootPublic} />
		}
	}
}

Router.propTypes = {
	isLogged: PropTypes.bool.isRequired,
	checkoutId: PropTypes.string
}