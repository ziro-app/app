import { useState } from 'react'

export const useForm = () => {
	const [cnpj, setCnpj] = useState('')
	const handleCnpj = event => setCnpj(event.target.value)
	const submitForm = event => event.PreventDefault()
	return { cnpj, handleCnpj, submitForm }
}