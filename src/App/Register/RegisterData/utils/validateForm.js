export const validateForm = (fname, lname, phone, pass, confirmPass) => {
	const fnameIsValid = Boolean(fname)
	const lnameIsValid = Boolean(lname)
	const phoneIsValid = phone.length === 15
	const passIsValid = !/^.{0,7}$/g.test(pass) // tests for min length of 8 char
	const confirmPassIsValid = pass === confirmPass
	// error messages
	const errorMsgFname = fnameIsValid ? '' : 'Campo obrigatório'
	const errorMsgLname = lnameIsValid ? '' : 'Campo obrigatório'
	const errorMsgPhone = phoneIsValid ? '' : 'Mínimo 11 caracteres'
	const errorMsgPass = passIsValid ? '' : 'Mínimo 8 caracteres'
	const errorMsgConfirmPass = confirmPassIsValid ? '' : 'Valor incorreto'
	const formIsValid = fnameIsValid && lnameIsValid && phoneIsValid && passIsValid && confirmPassIsValid
	return {
		formIsValid,
		errorMsgFname,
		errorMsgLname,
		errorMsgPhone,
		errorMsgPass,
		errorMsgConfirmPass
	}
}