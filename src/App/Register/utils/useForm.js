import { useState } from 'react'
import { maskInput } from '../../utils/maskInput'

export const useForm = () => {
	const [cnpj, setCnpj] = useState('')
	const handleCnpj = event => setCnpj(maskInput(event.target.value, '##.###.###/####-##', true))
	const submitForm = event => event.PreventDefault()
	return [cnpj, handleCnpj, submitForm]
}