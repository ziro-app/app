import { useState } from 'react'
import { get } from 'axios'
import { validateCnpj } from './validateCnpj'

export const useCnpjApi = (cnpj, setErrorCnpj) => {
	const [submitting, setSubmitting] = useState(false)
	const [errorSubmit, setErrorSubmit] = useState('')
	const submitForm = async event => {
		event.preventDefault()
		const { cnpjIsValid, errorMsgCnpj } = validateCnpj(cnpj)
		setErrorCnpj(errorMsgCnpj)
		if (cnpjIsValid) {
			try {
				setSubmitting(true)
				const { data: { message, data } } = await get(`${process.env.CNPJ_API}`)
				setSubmitting(false)
				if (message === 'Success')
					console.log(data)
				else {
					console.log(message)
					setErrorSubmit('Erro no serviço. Tente mais tarde')
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