import React from 'react'
import { useForm } from './utils/useForm'
import { useLogin } from './utils/useLogin'
import { Submit } from './Submit'
import { Errors } from './Errors'
import Icon from '@bit/vitorbarbosa19.ziro.icon'
import { container, welcome, subtitle, dot, wrapper, label, input } from './styles'

export const Login = () => {
	const { email, password, errorEmail, errorPassword, submitForm } = useForm()
	const { authError, resetAuthError, submitting, login } = useLogin()
	return (
		<form style={container} onSubmit={submitForm(login, resetAuthError, submitting)}>
			<h1 style={welcome}><label style={subtitle}>Bem-vindo</label><label style={dot}>.</label><br/>Acesse sua conta,</h1>
			<div style={wrapper}>
				<label style={label} htmlFor='email'><Icon type='email' size={13} />Email<Errors message={errorEmail} /></label>
				<input style={input} ref={email} disabled={submitting} placeholder='nome@exemplo.com' type='text' name='email' id='email' />
			</div>
			<div style={wrapper}>
				<label style={label} htmlFor='password'><Icon type='lock' size={13} />Senha<Errors message={errorPassword} /></label>
				<input style={input} ref={password} disabled={submitting} placeholder='mínimo 6 caracteres' type='password' name='password' id='password' />
			</div>
			<Submit submitting={submitting} authError={authError} />
		</form>
	)
}