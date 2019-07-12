import React, { useRef, useState } from 'react'
import { validateForm } from './utils/validateForm'
import { container, inputWrapper, input, forgotPass, submit } from './styles'

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
		console.log(inputEmail.current.value)
		console.log(inputPass.current.value)
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
				{errorEmail}
			</div>
			<div style={inputWrapper}>
				<label htmlFor='password'>Senha</label>
				<input ref={inputPass} style={input} type='password' name='password' id='password' />
				{errorPass}
			</div>
			<input style={submit} type='submit' value='Acessar' />
			<label style={forgotPass}>Esqueci a senha</label>
		</form>
	)
}