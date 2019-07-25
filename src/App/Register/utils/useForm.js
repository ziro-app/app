import { useState } from 'react'
import { maskInput } from '../../utils/maskInput'
import { validateCnpj } from './validateCnpj'

export const useForm = () => {
	const [cnpj, setCnpj] = useState('')
	const [errorCnpj, setErrorCnpj] = useState('')
	const handleCnpj = event => {
		setCnpj(maskInput(event.target.value, '##.###.###/####-##', true))
		const { cnpjIsValid, errorMsgCnpj } = validateCnpj(cnpj)
		setErrorCnpj(errorMsgCnpj)
	}
	const submitForm = event => event.preventDefault()
	return [cnpj, errorCnpj, handleCnpj, submitForm]
}