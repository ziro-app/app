import React from 'react'
import { Logo } from '../../Assets/Logo/index'
import { container, menu, tab, tabActive } from './styles'

export const Header = () => {
	return (
		<div style={container}>
			<Logo />
			<div style={menu}>
				<label style={tabActive}>Login</label>
				<label style={tab}>Cadastrar</label>
			</div>
		</div>
	)
}