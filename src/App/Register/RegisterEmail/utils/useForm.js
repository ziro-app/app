import { useState } from 'react'

export const useForm = (setEmail, setEmailIsValid) => {
	const [errorEmail, setErrorEmail] = useState('')
	const handleEmail = event => {
		setEmail(event.target.value)
		setEmailIsValid(false)
		if (errorEmail !== '') setErrorEmail('')
	}
	return [errorEmail, setErrorEmail, handleEmail]
}