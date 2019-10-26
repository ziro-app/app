import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from './utils/useForm'
import { useEmail } from './utils/useEmail'
import InputText from '@bit/vitorbarbosa19.ziro.input-text'
import Icon from '@bit/vitorbarbosa19.ziro.icon'
import { Submit } from './Submit'
import { form, wrapper, label, input, instructions } from './styles'

export const RegisterEmail = ({ email, setEmail, emailIsValid, setEmailIsValid, cnpj, razao, fantasia, rua, numero, complemento, bairro, cep, cidade, estado, pais, fname, lname, rg, cpf, birth, country, phone, pass, confirmPass, checkoutId, goForward }) => {
	const [errorEmail, setErrorEmail, handleEmail] = useForm(setEmail, setEmailIsValid)
	const [submitting, errorSubmit, submitForm] = useEmail(email, setErrorEmail, cnpj, razao, fantasia, rua, numero, complemento, bairro, cep, cidade, estado, pais, fname, lname, rg, cpf, birth, country, phone, pass, confirmPass, emailIsValid, setEmailIsValid, checkoutId, goForward)
	return (
		<form style={form} onSubmit={submitForm}>
			<div style={wrapper}>
				<label style={label} htmlFor='email'><Icon type='email' size={13} />Email</label>
				<InputText
					style={input}
					value={email}
					submitting={submitting}
					onChange={handleEmail}
					placeholder='nome@exemplo.com'
					name='email'
					id='email'
				/>
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
	emailIsValid: PropTypes.bool.isRequired,
	setEmailIsValid: PropTypes.func.isRequired,
	cnpj: PropTypes.string.isRequired,
	razao: PropTypes.string.isRequired,
	fantasia: PropTypes.string.isRequired,
	rua: PropTypes.string.isRequired,
	numero: PropTypes.string.isRequired,
	complemento: PropTypes.string.isRequired,
	bairro: PropTypes.string.isRequired,
	cep: PropTypes.string.isRequired,
	cidade: PropTypes.string.isRequired,
	estado: PropTypes.string.isRequired,
	pais: PropTypes.string.isRequired,
	fname: PropTypes.string.isRequired,
	lname: PropTypes.string.isRequired,
	rg: PropTypes.string.isRequired,
	cpf: PropTypes.string.isRequired,
	birth: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	pass: PropTypes.string.isRequired,
	confirmPass: PropTypes.string.isRequired,
	checkoutId: PropTypes.string,
	goForward: PropTypes.func.isRequired
}