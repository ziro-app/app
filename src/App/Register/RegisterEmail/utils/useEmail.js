import { useState } from 'react'
import { validateInput } from './validateInput'

export const useEmail = (email, setErrorEmail, cnpj, name, phone, pass, confirmPass) => {
	const [submitting, setSubmitting] = useState(false)
	const [errorSubmit, setErrorSubmit] = useState('')
	const submitForm = async event => {
		event.preventDefault()
		const { emailIsValid, errorMsgEmail, inputsAreValid, errorInputs } = validateInput(email, cnpj, name, phone, pass, confirmPass)
		setErrorEmail(errorMsgEmail)
		setErrorSubmit(errorInputs)
		if (emailIsValid && inputsAreValid) {
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