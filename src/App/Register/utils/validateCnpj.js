export const validateCnpj = cnpj => {
	const cnpjIsValid = cnpj.length === 18
	const errorMsgCnpj = cnpjIsValid ? '' : 'Deve conter 14 caracteres'
	return {
		cnpjIsValid,
		errorMsgCnpj
	}
}