import React from 'react'
import { usePath, A } from 'hookrouter'
import { Logo } from '../../Assets/Logo/index'
import { container, menu, tab, tabActive } from './styles'

export const Header = () => {
	const path = usePath()
	return (
		<div style={container}>
			<Logo />
			<div style={menu}>
				<A style={path !== '/cadastrar' ? tabActive : tab} href='/login'>Login</A>
				<A style={path === '/cadastrar' ? tabActive : tab} href='/cadastrar'>Cadastrar</A>
			</div>
		</div>
	)
}