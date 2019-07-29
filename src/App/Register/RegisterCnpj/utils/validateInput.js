export const validateInput = cnpj => {
	const inputIsValid = cnpj.length === 18
	const errorMsgCnpj = inputIsValid ? '' : 'Deve conter 14 caracteres'
	return {
		inputIsValid,
		errorMsgCnpj
	}
}