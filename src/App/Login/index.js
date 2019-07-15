import React from 'react'
import { useForm } from './utils/useForm'
import { useLogin } from './utils/useLogin'
import { Submit } from './Submit'
import { Errors } from './Errors'
import { container, wrapper, input } from './styles'

export const Login = () => {
	const { email, password, errorEmail, errorPassword, submitForm } = useForm()
	const { authError, submitting, login } = useLogin()
	return (
		<form style={container} onSubmit={submitForm(login, submitting)}>
			<div style={wrapper}>
				<label htmlFor='email'>Email</label>
				<input style={input} ref={email} type='text' name='email' id='email' />
				<Errors message={errorEmail} />
			</div>
			<div style={wrapper}>
				<label htmlFor='password'>Senha</label>
				<input style={input} ref={password} type='password' name='password' id='password' />
				<Errors message={errorPassword} />
			</div>
			<Submit submitting={submitting} authError={authError} />
		</form>
	)
}