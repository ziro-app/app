import { useState } from 'react'

export const useForm = () => {
	const patternCnpj = '##.###.###/####-##'
	const mask = (value, pattern) => {
		// pattern must use '#' to represent valid user input chars
		if (value) {
			// remove from value all chars placed by the mask in a previous iteration
			const charsToRemove = pattern.replace(/#/g, '')
			const rawValue = charsToRemove.split('').reduce((acc,cur) => acc.replace(cur,''), value.toString())
	
			const nthOccurrence = pattern.split('#', rawValue.length).join('#').length
	
			const patternAdjusted = pattern.slice(0, nthOccurrence + 1)

			let index = 0
			return patternAdjusted.replace(/#/g, () => rawValue[index++])
		}
		return ''
	}
	const [cnpj, setCnpj] = useState('')
	const handleCnpj = ({ target: { value } }) => {
		setCnpj(mask(value.toString(), patternCnpj))
	}
	const submitForm = event => event.PreventDefault()
	return [cnpj, handleCnpj, submitForm]
}