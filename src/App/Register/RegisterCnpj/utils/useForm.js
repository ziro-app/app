import { useState } from 'react'
import maskInput from '@ziro/mask-input'

export const useForm = (setCnpj, setCnpjIsValid) => {
	const [errorCnpj, setErrorCnpj] = useState('')
	const handleCnpj = event => {
		setCnpj(maskInput(event.target.value, '##.###.###/####-##', true))
		setCnpjIsValid(false)
		if (errorCnpj !== '') setErrorCnpj('')
	}
	return [errorCnpj, setErrorCnpj, handleCnpj]
}