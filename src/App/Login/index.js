import React from 'react'
import { useForm } from './utils/useForm'
import { useLogin } from './utils/useLogin'
import { Submit } from './Submit'
import { Errors } from './Errors'
import { PasswordIcon } from '../../Assets/PasswordIcon/index'
import { EmailIcon } from '../../Assets/EmailIcon/index'
import { container, welcome, wrapper, label, input } from './styles'

export const Login = () => {
	const { email, password, errorEmail, errorPassword, submitForm } = useForm()
	const { authError, resetAuthError, submitting, login } = useLogin()
	return (
		<form style={container} onSubmit={submitForm(login, resetAuthError, submitting)}>
			<h1 style={welcome}><label style={{fontSize: '1.4rem'}}>BEM-VINDO</label><label style={{color: '#FFE401', fontSize: '2.1rem'}}>.</label><br/>Acesse sua conta,</h1>
			<div style={wrapper}>
				<label style={label} htmlFor='email'><EmailIcon size={14} />Email</label>
				<input style={input} ref={email} placeholder='nome@exemplo.com' type='text' name='email' id='email' />
				<Errors message={errorEmail} />
			</div>
			<div style={wrapper}>
				<label style={label} htmlFor='password'><PasswordIcon size={14} />Senha</label>
				<input style={input} ref={password} placeholder='mínimo 8 caracteres' type='password' name='password' id='password' />
				<Errors message={errorPassword} />
			</div>
			<Submit submitting={submitting} authError={authError} />
		</form>
	)
}