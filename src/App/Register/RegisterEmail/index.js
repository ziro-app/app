import React from 'react'
import { PropTypes } from 'prop-types'
import { useForm } from './utils/useForm'
import { useEmail } from './utils/useEmail'
import { Submit } from './Submit'
import { SuccessIcon } from '../../../Assets/SuccessIcon/index'
import { EmailIcon } from '../../../Assets/EmailIcon/index'
import { successColor } from '../../../Theme/styleVariables'
import { container, success, message, welcome, subtitle, dot, form, wrapper, labelEmail, inputEmail, instructions, text } from './styles'

export const RegisterEmail = ({ email, setEmail, cnpj, name, phone, pass, confirmPass, setDirection }) => {
	const [errorEmail, setErrorEmail, handleEmail] = useForm(setEmail)
	const [submitting, errorSubmit, submitForm] = useEmail(email, setErrorEmail, cnpj, name, phone, pass, confirmPass, setDirection)
	return (
		<div style={container}>
			<div style={success}>
				<label style={message}><SuccessIcon size={14} color={successColor} />Seus dados foram salvos!</label>
				<h1 style={welcome}><label style={subtitle}>Passo 3</label><label style={dot}>.</label><br/>Valide seu email</h1>
			</div>
			<form style={form} onSubmit={submitForm}>
				<div style={wrapper}>
					<label style={labelEmail} htmlFor='email'><EmailIcon size={13} />Email</label>
					<input style={inputEmail} onChange={handleEmail} value={email} disabled={false} placeholder='nome@exemplo.com' type='text' name='email' id='email' />
				</div>
				<div style={instructions}>
					<p style={text}>Será enviado um email de validação para sua caixa</p>
				</div>
				<Submit submitting={submitting} errorEmail={errorEmail} errorSubmit={errorSubmit} />
			</form>
		</div>
	)
}

RegisterEmail.propTypes = {
	email: PropTypes.string.isRequired,
	setEmail: PropTypes.func.isRequired,
	cnpj: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	pass: PropTypes.string.isRequired,
	confirmPass: PropTypes.string.isRequired,
	setDirection: PropTypes.func.isRequired
}