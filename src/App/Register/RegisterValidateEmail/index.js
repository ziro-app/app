import React from 'react'
import { SuccessIcon } from '../../../Assets/SuccessIcon/index'
import { successColor } from '../../../Theme/styleVariables'
import { Submit } from './Submit'
import { container, success, message, welcome, subtitle, dot, instructions, text } from './styles'

export const RegisterValidateEmail = () =>
	<div style={container}>
		<div style={success}>
			<label style={message}><SuccessIcon size={14} color={successColor} />Email de validação enviado!</label>
			<h1 style={welcome}><label style={subtitle}>Passo 4</label><label style={dot}>.</label><br/>Verifique sua caixa</h1>
		</div>
		<div style={instructions}>
			<p style={text}>Acesse o link para validar seu endereço de email e concluir o cadastro</p>
			<p style={text}>Caso não tenha recebido, aperte o botão para reenviar</p>
		</div>
		{/*<Submit callToAction='Já acessei o link' type='primary' />*/}
		<Submit />
	</div>