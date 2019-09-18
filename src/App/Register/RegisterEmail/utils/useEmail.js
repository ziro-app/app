import { useState } from 'react'
import { useLocation } from 'wouter'
import { auth, db } from '../../../../Firebase/index'
import { validateInput } from './validateInput'

export const useEmail = (email, setErrorEmail, cnpj, razao, fantasia, rua, numero, complemento, bairro, cep, cidade, estado, pais, fname, lname, rg, cpf, birth, country, phone, pass, confirmPass, pageIsValid, setPageIsValid, goForward) => {
	const [submitting, setSubmitting] = useState(false)
	const [errorSubmit, setErrorSubmit] = useState('')
	const [, setLocation] = useLocation()
	const submitForm = async event => {
		event.preventDefault()
		if (pageIsValid) {
			setLocation('/cadastrar/validar-email')
			goForward()
		}
		else {
			const { emailIsValid, errorMsgEmail, inputsAreValid, errorInputs } = validateInput(email,
				cnpj, razao, fantasia, rua, numero, complemento, bairro, cep, cidade, estado, pais, fname, lname, rg, cpf, birth, country, phone, pass, confirmPass)
			setErrorEmail(errorMsgEmail)
			setErrorSubmit(errorInputs)
			if (emailIsValid && inputsAreValid) {
				try {
					setSubmitting(true)
					const { user } = await auth.createUserWithEmailAndPassword(email, pass)
					await auth.currentUser.sendEmailVerification({ url: process.env.CONTINUE_URL })
					await db.collection('users').add({
						uid: user.uid,
						cnpj,
						razao,
						fantasia,
						rua,
						numero,
						complemento,
						bairro,
						cep,
						cidade,
						estado,
						pais,
						fname,
						lname,
						rg,
						cpf,
						birth,
						phone: `${country} ${phone}`
					})
					await db.collection('cnpjs').add({ cnpj })
					setPageIsValid(true)
					setLocation('/cadastrar/validar-email')
					goForward()
				} catch (error) {
					setSubmitting(false)
					console.log(error)
					if (error.code) {
						switch (error.code) {
							case 'auth/network-request-failed': setAuthError('Sem conexão com a rede'); break
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