import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'wouter'
import { Logo } from '../../Assets/Logo/index'
import { container, logo, title, body, button } from './styles'

export const NotFound = ({ fallback }) =>
	<div style={container}>
	    <div style={logo}><Logo /></div>
		<h1 style={title}>Página não existe</h1>
		<p style={body}>Retorne à pagina inicial para continuar navegando</p>
		<Link href={fallback}><input style={button} type='submit' value='Retornar' /></Link>
	</div>

NotFound.propTypes = {
	user: PropTypes.object
}