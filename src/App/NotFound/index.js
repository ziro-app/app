import React from 'react'
import { Logo } from '../../Assets/Logo/index'
import { container, title } from './styles'

export const NotFound = () =>
	<div style={container}>
	    <Logo />
		<h1 style={title}>Página não existe</h1>
		<p>Retorne à pagina inicial para continuar navegando</p>
		<p>Retornar</p>
	</div>