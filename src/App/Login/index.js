import React from 'react'
import { useForm } from './utils/useForm'
import { container, inputWrapper, input, forgotPass, error, submit } from './styles'

export const Login = () => {
	const { email, password, errorEmail, errorPassword, submitForm } = useForm()
	return (
		<form style={container} onSubmit={submitForm}>
			<div style={inputWrapper}>
				<label htmlFor='email'>Email</label>
				<input style={input} ref={email} type='text' name='email' id='email' />
				<label style={error}>{errorEmail}&nbsp;</label>
			</div>
			<div style={inputWrapper}>
				<label htmlFor='password'>Senha</label>
				<input style={input} ref={password} type='password' name='password' id='password' />
				<label style={error}>{errorPassword}&nbsp;</label>
			</div>
			<input style={submit} type='submit' value='Acessar' />
			<label style={forgotPass}>Esqueci a senha</label>
		</form>
	)
}