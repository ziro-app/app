import { useState } from 'react'
// import { validateCnpj } from './validateCnpj'

export const useEmail = (email, setErrorEmail) => {
	const [submitting, setSubmitting] = useState(false)
	const [errorSubmit, setErrorSubmit] = useState('')
	const submitForm = async event => {
		event.preventDefault()
		// const { inputIsValid, errorMsgCnpj } = validateInput(email)
		// setErrorEmail(errorMsgCnpj)
		if (true) {
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