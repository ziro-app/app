import { useState } from 'react'
import { useLocation } from 'wouter'
import { db } from '../../../../Firebase/db'
import { validateInput } from './validateInput'

export const useEmail = (email, setErrorEmail, cnpj, fname, lname, country, phone, pass, confirmPass, pageIsValid, setPageIsValid, setDirection) => {
	const [submitting, setSubmitting] = useState(false)
	const [errorSubmit, setErrorSubmit] = useState('')
	const [, setLocation] = useLocation()
	const submitForm = async event => {
		event.preventDefault()
		if (pageIsValid) {
			setLocation('/cadastrar/validar-email')
			setDirection('forward')
		}
		else {
			const { emailIsValid, errorMsgEmail, inputsAreValid, errorInputs } = validateInput(email, cnpj, fname, lname, country, phone, pass, confirmPass)
			setErrorEmail(errorMsgEmail)
			setErrorSubmit(errorInputs)
			if (emailIsValid && inputsAreValid) {
				try {
					setSubmitting(true)
					const { user } = await db.auth().createUserWithEmailAndPassword(email, pass)
					await db.auth().currentUser.sendEmailVerification({ url: process.env.CONTINUE_URL })
					await db.firestore().collection('users').add({
						id: user.uid,
						cnpj,
						fname,
						lname,
						phone: `${country} ${phone}`
					})
					await db.firestore().collection('cnpjs').add({ cnpj })
					setPageIsValid(true)
					setLocation('/cadastrar/validar-email')
					setDirection('forward')
				} catch (error) {
					setSubmitting(false)
					console.log(error)
					if (error.code) {
						switch (error.code) {
							case 'auth/invalid-email': setErrorSubmit('Email inválido'); break
							case 'auth/email-already-in-use': setErrorSubmit('Email já cadastrado'); break
							case 'auth/operation-not-allowed': setErrorSubmit('Operação não permitida'); break
							case 'auth/weak-password': setErrorSubmit('Senha não é forte o suficiente'); break
						}
					}
				}
			}
		}
	}
	return [submitting, errorSubmit, submitForm]
}