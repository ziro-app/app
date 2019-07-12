import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from './utils/useForm'
import { useLogin } from './utils/useLogin'
import { Spinner } from '../../Spinner/index'
import { AlertIcon } from '../../AlertIcon/index'
import { container, wrapper, input, error, buttonWrapper, loader, submit, scaleButton, forgotPass } from './styles'

export const Login = () => {
	const { email, password, errorEmail, errorPassword, submitForm } = useForm()
	const { authError, isLoading, login } = useLogin()
	return (
		<form style={container} onSubmit={submitForm(login)}>
			<div style={wrapper}>
				<label htmlFor='email'>Email</label>
				<input style={input} ref={email} type='text' name='email' id='email' />
				<label style={error}><AlertIcon size={16} />&nbsp;{errorEmail}</label>
			</div>
			<div style={wrapper}>
				<label htmlFor='password'>Senha</label>
				<input style={input} ref={password} type='password' name='password' id='password' />
				<label style={error}><AlertIcon size={16} />&nbsp;{errorPassword}</label>
			</div>
			<div style={buttonWrapper}>
				<div style={loader}>
					{isLoading ? <Spinner size={'4rem'} /> : <label style={error}><AlertIcon size={16} />&nbsp;{authError}</label>}
				</div>
				<motion.input style={submit} type='submit' value='Acessar' whileTap={scaleButton} />
				<label style={forgotPass}>Esqueci a senha</label>
			</div>
		</form>
	)
}