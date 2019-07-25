import { useState } from 'react'
import { maskInput } from '../../utils/maskInput'

export const useForm = () => {
	const [cnpj, setCnpj] = useState('')
	const [errorCnpj, setErrorCnpj] = useState('')
	const handleCnpj = event => {
		setCnpj(maskInput(event.target.value, '##.###.###/####-##', true))
		if (errorCnpj !== '') setErrorCnpj('')
	}
	return [cnpj, errorCnpj, setErrorCnpj, handleCnpj]
}