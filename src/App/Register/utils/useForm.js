import { useState } from 'react'
import { maskInput } from '../../utils/maskInput'
import { validateCnpj } from './validateCnpj'

export const useForm = () => {
	const [cnpj, setCnpj] = useState('')
	const [errorCnpj, setErrorCnpj] = useState('')
	const handleCnpj = event => {
		setCnpj(maskInput(event.target.value, '##.###.###/####-##', true))
		if (errorCnpj !== '') setErrorCnpj('')
	}
	const submitForm = event => {
		event.preventDefault()
		const { cnpjIsValid, errorMsgCnpj } = validateCnpj(cnpj)
		setErrorCnpj(errorMsgCnpj)
	}
	return [cnpj, errorCnpj, handleCnpj, submitForm]
}