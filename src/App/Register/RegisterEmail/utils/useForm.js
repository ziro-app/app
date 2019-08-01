import { useState } from 'react'

export const useForm = setEmail => {
	const [errorEmail, setErrorEmail] = useState('')
	const handleEmail = event => {
		setEmail(event.target.value)
		if (errorEmail !== '') setErrorEmail('')
	}
	return [errorEmail, setErrorEmail, handleEmail]
}