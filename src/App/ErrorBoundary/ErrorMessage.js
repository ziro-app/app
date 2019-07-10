import React from 'react'
import { Logo } from '../Logo/index'
import { container } from './styles'

const ErrorMessage = () =>
	<div style={container}>
	    <Logo />
		<p>Ocorreu um erro na renderização</p>
		<p>Tente novamente ou contate o suporte</p>
	</div>

export default ErrorMessage