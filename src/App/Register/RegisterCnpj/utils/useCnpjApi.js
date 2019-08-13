import { useState } from 'react'
import { post } from 'axios'
import { useLocation } from 'wouter'
import { db } from '../../../../Firebase/db'
import { validateInput } from './validateInput'
import { validateCnpj } from './validateCnpj'

export const useCnpjApi = (cnpj, setErrorCnpj, cnpjIsValid, setCnpjIsValid, setDirection) => {
	const [submitting, setSubmitting] = useState(false)
	const [errorSubmit, setErrorSubmit] = useState('')
	const [location, setLocation] = useLocation()
	const submitForm = async event => {
		event.preventDefault()
		if (cnpjIsValid) {
			setLocation('/cadastrar/dados')
			setDirection('forward')
		}
		else {
			const { inputIsValid, errorMsgCnpj } = validateInput(cnpj)
			setErrorCnpj(errorMsgCnpj)
			if (inputIsValid) {
				try {
					setSubmitting(true)
					const { empty } = await db.firestore().collection('users').where('cnpj', '==', cnpj).get()
					if (!empty) {
						setSubmitting(false)
						setErrorSubmit('CNPJ já cadastrado na base')
					} else {
						const { data: { message, data } } = await post(`${process.env.CNPJ_API}`, { cnpj })
						setSubmitting(false)
						if (data.return !== 'OK')
							setErrorSubmit('CNPJ não encontrado na Receita')
						if (message !== 'Success') {
							console.log(message)
							setErrorSubmit('Erro no serviço. Tente mais tarde')					
						}
						if (data.return === 'OK' && message === 'Success') {
							const { status, message } = validateCnpj(data)
							setErrorSubmit(message)
							if (status === 'Success') {
								setCnpjIsValid(true)
								setLocation('/cadastrar/dados')
								setDirection('forward')
							}
						}
					}
				} catch (error) {
					console.log(error)
					setSubmitting(false)
					setErrorSubmit('Erro na conexão. Tente mais tarde')
				}
			}
		}
	}
	return [submitting, errorSubmit, submitForm]
}