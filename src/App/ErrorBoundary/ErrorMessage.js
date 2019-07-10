import React from 'react'
import { Logo } from '../Logo/index'
import { container, title } from './styles'

const ErrorMessage = () =>
	<div style={container}>
	    <Logo />
		<h1 style={title}>Erro na página</h1>
		<p>Ocorreu um erro na renderização</p>
		<p>Recarregue a página ou contate o suporte</p>
	</div>

export default ErrorMessage