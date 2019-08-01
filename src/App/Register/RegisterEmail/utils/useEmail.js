import { useState } from 'react'
import { validateInput } from './validateInput'

export const useEmail = (email, setErrorEmail) => {
	const [submitting, setSubmitting] = useState(false)
	const [errorSubmit, setErrorSubmit] = useState('')
	const submitForm = async event => {
		event.preventDefault()
		const { emailIsValid, errorMsgEmail } = validateInput(email)
		setErrorEmail(errorMsgEmail)
		if (emailIsValid) {
			try {
				setSubmitting(true)
				const response = await Promise.reject('rejected')
				setSubmitting(false)
			} catch (error) {
				console.log(error)
				setSubmitting(false)
				setErrorSubmit('Erro ao enviar')
			}
		}
	}
	return [submitting, errorSubmit, submitForm]
}