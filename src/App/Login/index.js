import React, { useRef } from 'react'
import { validateForm } from './utils/validateForm'
import { container, inputWrapper, input, forgotPass, submit } from './styles'

export const Login = () => {
	const inputEmail = useRef(null)
	const inputPass = useRef(null)
	const handleSubmit = event => {
		event.preventDefault()
		const formIsValid = validateForm(inputEmail.current.value, inputPass.current.value)
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
			</div>
			<div style={inputWrapper}>
				<label htmlFor='password'>Senha</label>
				<input ref={inputPass} style={input} type='password' name='password' id='password' />
			</div>
			<input style={submit} type='submit' value='Acessar' />
			<label style={forgotPass}>Esqueci a senha</label>
		</form>
	)
}