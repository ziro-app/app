import React, { useRef, useState } from 'react'
import { validateForm } from './utils/validateForm'
import { container, inputWrapper, input, forgotPass, error, submit } from './styles'

export const Login = () => {
	const inputEmail = useRef(null)
	const [errorEmail, setErrorEmail] = useState('')
	const inputPass = useRef(null)
	const [errorPass, setErrorPass] = useState('')
	const handleSubmit = event => {
		event.preventDefault()
		const { errorMsgEmail, errorMsgPassword, formIsValid } = validateForm(
			inputEmail.current.value,
			inputPass.current.value
		)
		setErrorEmail(errorMsgEmail)
		setErrorPass(errorMsgPassword)
		if (formIsValid)
			console.log('is valid')
		else
			console.log('is NOT valid')
	}
	return (
		<form style={container} onSubmit={handleSubmit}>
			<div style={inputWrapper}>
				<label htmlFor='email'>Email</label>
				<input ref={inputEmail} style={input} type='text' name='email' id='email' />
				<label style={error}>{errorEmail}&nbsp;</label>
			</div>
			<div style={inputWrapper}>
				<label htmlFor='password'>Senha</label>
				<input ref={inputPass} style={input} type='password' name='password' id='password' />
				<label style={error}>{errorPass}&nbsp;</label>
			</div>
			<input style={submit} type='submit' value='Acessar' />
			<label style={forgotPass}>Esqueci a senha</label>
		</form>
	)
}