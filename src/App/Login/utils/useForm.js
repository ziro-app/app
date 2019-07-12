import { useRef, useState } from 'react'
import { validateForm } from './validateForm'

export const useForm = () => {	
	// input ref variables
	const email = useRef(null)
	const password = useRef(null)
	// error message variables
	const [errorEmail, setErrorEmail] = useState('')
	const [errorPassword, setErrorPassword] = useState('')
	// submit function
	const submitForm = callback => event => {
		event.preventDefault()
		const { errorMsgEmail, errorMsgPassword, formIsValid } = validateForm(
			email.current.value,
			password.current.value
		)
		setErrorEmail(errorMsgEmail)
		setErrorPassword(errorMsgPassword)
		if (formIsValid)
			callback()
	}
	return { email, password, errorEmail, errorPassword, submitForm }
}