import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from './utils/useForm'
import { useLogin } from './utils/useLogin'
import { container, inputWrapper, input, forgotPass, error, submit, scaleButton } from './styles'

export const Login = () => {
	const { email, password, errorEmail, errorPassword, submitForm } = useForm()
	const { authError, login } = useLogin()
	return (
		<form style={container} onSubmit={submitForm(login)}>
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
			<label style={error}>{authError}&nbsp;</label>
			<motion.input style={submit} type='submit' value='Acessar' whileTap={scaleButton} />
			<label style={forgotPass}>Esqueci a senha</label>
		</form>
	)
}