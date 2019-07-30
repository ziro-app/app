export const validateForm = (name, phone, pass, confirmPass) => {
	const nameIsValid = Boolean(name)
	const phoneIsValid = phone.length === 15
	const passIsValid = !/^.{0,7}$/g.test(pass) // tests for min length of 8 char
	const confirmPassIsValid = pass === confirmPass
	// error messages
	const errorMsgName = nameIsValid ? '' : 'Campo obrigatório'
	const errorMsgPhone = phoneIsValid ? '' : 'Mínimo 11 caracteres'
	const errorMsgPass = passIsValid ? '' : 'Mínimo 8 caracteres'
	const errorMsgConfirmPass = confirmPassIsValid ? '' : 'Valor incorreto'
	const formIsValid = nameIsValid && phoneIsValid && passIsValid && confirmPassIsValid
	return {
		formIsValid,
		errorMsgName,
		errorMsgPhone,
		errorMsgPass,
		errorMsgConfirmPass
	}
}