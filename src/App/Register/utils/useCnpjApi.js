import { useState } from 'react'
import { post } from 'axios'
import { validateInput } from './validateInput'
import { validateCnpj } from './validateCnpj'

export const useCnpjApi = (cnpj, setErrorCnpj) => {
	const [submitting, setSubmitting] = useState(false)
	const [errorSubmit, setErrorSubmit] = useState('')
	const submitForm = async event => {
		event.preventDefault()
		const { inputIsValid, errorMsgCnpj } = validateInput(cnpj)
		setErrorCnpj(errorMsgCnpj)
		if (inputIsValid) {
			try {
				setSubmitting(true)
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
					if (status === 'Success')
						console.log('Ok, redirect to step 2') // <----- CHANGE HERE
				}
			} catch (error) {
				console.log(error)
				setSubmitting(false)
				setErrorSubmit('Erro na conexão. Tente mais tarde')
			}
		}
	}
	return [submitting, errorSubmit, submitForm]
}