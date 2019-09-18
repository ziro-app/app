import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from './utils/useForm'
import { useEmail } from './utils/useEmail'
import InputText from '@bit/vitorbarbosa19.ziro.input-text'
import Icon from '@bit/vitorbarbosa19.ziro.icon'
import { Submit } from './Submit'
import { form, wrapper, label, input, instructions } from './styles'

export const RegisterEmail = ({ email, setEmail, cnpj, fname, lname, country, phone, pass, confirmPass, emailIsValid, setEmailIsValid, goForward }) => {
	const [errorEmail, setErrorEmail, handleEmail] = useForm(setEmail, setEmailIsValid)
	const [submitting, errorSubmit, submitForm] = useEmail(email, setErrorEmail, cnpj, fname, lname, country, phone, pass, confirmPass, emailIsValid, setEmailIsValid, goForward)
	return (
		<form style={form} onSubmit={submitForm}>
			<div style={wrapper}>
				<label style={label} htmlFor='email'><Icon type='email' size={13} />Email</label>
				<input style={input} onChange={handleEmail} value={email} disabled={false} placeholder='nome@exemplo.com' type='text' name='email' id='email' />
			</div>
			<div style={instructions}>
				<label>Será enviado um email de validação para sua caixa</label>
			</div>
			<Submit submitting={submitting} errorEmail={errorEmail} errorSubmit={errorSubmit} />
		</form>
	)
}

RegisterEmail.propTypes = {
	email: PropTypes.string.isRequired,
	setEmail: PropTypes.func.isRequired,
	cnpj: PropTypes.string.isRequired,
	fname: PropTypes.string.isRequired,
	lname: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	pass: PropTypes.string.isRequired,
	confirmPass: PropTypes.string.isRequired,
	emailIsValid: PropTypes.bool.isRequired,
	setEmailIsValid: PropTypes.func.isRequired,
	goForward: PropTypes.func.isRequired
}