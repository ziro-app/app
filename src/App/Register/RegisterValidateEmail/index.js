import React from 'react'
import PropTypes from 'prop-types'
import { Reload } from './Reload'
import { Submit } from './Submit'
import { container, instructions } from './styles'

export const RegisterValidateEmail = ({ email }) => {
	if (!email) return null
	return (
		<div style={container}>
			<div style={instructions}>
				<label>Enviado para:</label>
				<label>{email}</label>
				<label>Caso não tenha recebido, aperte o botão para reenviar</label>
				<label>Caso tenha digitado errado, retorne e corrija o email</label>
			</div>
			<Reload />
			<Submit />
		</div>
	)
}

RegisterValidateEmail.propTypes = {
	email: PropTypes.string.isRequired
}