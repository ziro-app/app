import React from 'react'
import { A } from 'hookrouter'
import { Logo } from '../../Assets/Logo/index'
import { container, menu, tab, tabActive } from './styles'

export const Header = () => {
	return (
		<div style={container}>
			<Logo />
			<div style={menu}>
				<A style={tabActive} href='/login'>Login</A>
				<A style={tab} href='/cadastrar'>Cadastrar</A>
			</div>
		</div>
	)
}