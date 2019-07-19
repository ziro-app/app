import React from 'react'
import { useLocation, Link } from 'wouter'
import { Logo } from '../../Assets/Logo/index'
import { container, menu, tab, tabActive } from './styles'

export const Header = () => {
	const [location] = useLocation()
	return (
		<div style={container}>
			<Logo />
			<div style={menu}>
				<Link style={location !== '/cadastrar' ? tabActive : tab} href='/login'>Login</Link>
				<Link style={location === '/cadastrar' ? tabActive : tab} href='/cadastrar'>Cadastrar</Link>
			</div>
		</div>
	)
}