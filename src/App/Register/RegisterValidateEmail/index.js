import React from 'react'
import { Reload } from './Reload'
import { Submit } from './Submit'
import { container, instructions } from './styles'

export const RegisterValidateEmail = () =>
	<div style={container}>
		<div style={instructions}>
			<label>Acesse o link para validar seu endereço de email e concluir o cadastro</label>
			<label>Caso não tenha recebido, aperte o botão para reenviar</label>
		</div>
		<Reload />
		<Submit />
	</div>