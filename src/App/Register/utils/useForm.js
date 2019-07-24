import { useState } from 'react'

export const useForm = () => {
	const patternCnpj = '##.###.###/####-##'
	const mask = (value, pattern) => {
		// value must be a string
		// pattern must use '#' to represent numbers
		if (value) {
			const valueClean = value.replace('.','').replace('.','').replace('/','').replace('-','')
	
			const nthOccurrence = pattern.split('#', valueClean.length).join('#').length
	
			const patternAdjusted = pattern.slice(0, nthOccurrence + 1)

			let index = 0
			return patternAdjusted.replace(/#/g, () => valueClean[index++])
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
// 11222333000144