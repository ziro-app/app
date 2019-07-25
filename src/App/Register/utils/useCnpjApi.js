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
				if (message === 'Success')
					console.log(data)
				else
					console.log(message)
				setSubmitting(false)
			} catch (error) {
				console.log(error)
				setSubmitting(false)
			}
		}
	}
	return [submitting, errorSubmit, submitForm]
}