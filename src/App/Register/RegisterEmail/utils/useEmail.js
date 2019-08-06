import { useState } from 'react'
import { useLocation } from 'wouter'
import { db } from '../../../../Firebase/db'
import { validateInput } from './validateInput'

export const useEmail = (email, setErrorEmail, cnpj, name, phone, pass, confirmPass, setDirection) => {
	const [submitting, setSubmitting] = useState(false)
	const [errorSubmit, setErrorSubmit] = useState('')
	const [, setLocation] = useLocation()
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
				setLocation('/cadastrar/validar-email')
				setDirection('forward')
			} catch (error) {
				console.log(error)
				setSubmitting(false)
				setErrorSubmit('Erro ao enviar')
			}
		}
	}
	return [submitting, errorSubmit, submitForm]
}