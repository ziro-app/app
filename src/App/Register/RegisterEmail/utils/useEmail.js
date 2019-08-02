import { useState } from 'react'
import { db } from '../../../../Firebase/db'
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
				await db.auth().createUserWithEmailAndPassword(email, pass)
				await db.auth().currentUser.sendEmailVerification({ url: process.env.CONTINUE_URL })
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