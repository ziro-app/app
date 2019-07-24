import { useState } from 'react'
import { maskInput } from '../../utils/maskInput'

export const useForm = () => {
	const [cnpj, setCnpj] = useState('')
	const handleCnpj = ({ target: { value } }) => setCnpj(maskInput(value, '##.###.###/####-##'))
	const submitForm = event => event.PreventDefault()
	return [cnpj, handleCnpj, submitForm]
}