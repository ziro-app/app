import React, { useRef } from 'react'
import { container } from './styles'

export const Login = () => {
	const inputEmail = useRef(null)
	const inputPass = useRef(null)
	const handleSubmit = event => {
		event.preventDefault()
		console.log(inputEmail.current.value)
		console.log(inputPass.current.value)
	}
	return (
		<form style={container} onSubmit={handleSubmit}>
			<input type='text' name='email' ref={inputEmail} />
			<input type='password' name='password' ref={inputPass} />
			<input type='submit' />
		</form>
	)
}