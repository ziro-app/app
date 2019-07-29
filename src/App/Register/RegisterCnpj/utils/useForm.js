import { useState } from 'react'
import { maskInput } from '../../../utils/maskInput'

export const useForm = setCnpj => {
	const [errorCnpj, setErrorCnpj] = useState('')
	const handleCnpj = event => {
		setCnpj(maskInput(event.target.value, '##.###.###/####-##', true))
		if (errorCnpj !== '') setErrorCnpj('')
	}
	return [errorCnpj, setErrorCnpj, handleCnpj]
}