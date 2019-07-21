import React from 'react'
import { Link } from 'wouter'
import { Logo } from '../../Assets/Logo/index'
import { container, logo, title, body, button } from './styles'

export const NotFound = () =>
	<div style={container}>
	    <div style={logo}><Logo /></div>
		<h1 style={title}>Página não existe</h1>
		<p style={body}>Retorne à pagina inicial para continuar navegando</p>
		<Link href='/'><input style={button} type='submit' value='Retornar' /></Link>
	</div>