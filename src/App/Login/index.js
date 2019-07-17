import React from 'react'
import { useForm } from './utils/useForm'
import { useLogin } from './utils/useLogin'
import { Submit } from './Submit'
import { Errors } from './Errors'
import { PasswordIcon } from '../../Assets/PasswordIcon/index'
import { container, wrapper, label, input } from './styles'

export const Login = () => {
	const { email, password, errorEmail, errorPassword, submitForm } = useForm()
	const { authError, resetAuthError, submitting, login } = useLogin()
	return (
		<form style={container} onSubmit={submitForm(login, resetAuthError, submitting)}>
			<div style={wrapper}>
				<label style={label} htmlFor='email'><PasswordIcon size={15} />Email</label>
				<input style={input} ref={email} type='text' name='email' id='email' />
				<Errors message={errorEmail} />
			</div>
			<div style={wrapper}>
				<label style={label} htmlFor='password'><PasswordIcon size={15} />Senha</label>
				<input style={input} ref={password} type='password' name='password' id='password' />
				<Errors message={errorPassword} />
			</div>
			<Submit submitting={submitting} authError={authError} />
		</form>
	)
}