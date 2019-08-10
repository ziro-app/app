export const validateForm = (fname, lname, country, phone, pass, confirmPass) => {
	const fnameIsValid = Boolean(fname)
	const lnameIsValid = Boolean(lname)
	const countryIsValid = country.length >= 2
	const phoneIsValid = phone.length === 15
	const passIsValid = !/^.{0,7}$/g.test(pass) // tests for min length of 8 char
	const confirmPassIsValid = pass === confirmPass
	// error messages
	const errorMsgFname = fnameIsValid ? '' : 'Campo obrigatório'
	const errorMsgLname = lnameIsValid ? '' : 'Campo obrigatório'
	const errorMsgCountry = countryIsValid ? '' : 'Digite cód. país. BR é 55'
	const errorMsgPhone = phoneIsValid ? '' : 'Mínimo 11 caracteres'
	const errorMsgPass = passIsValid ? '' : 'Mínimo 8 caracteres'
	const errorMsgConfirmPass = confirmPassIsValid ? '' : 'Valor incorreto'
	const formIsValid = fnameIsValid && lnameIsValid && countryIsValid && phoneIsValid && passIsValid && confirmPassIsValid
	return {
		formIsValid,
		errorMsgFname,
		errorMsgLname,
		errorMsgCountry,
		errorMsgPhone,
		errorMsgPass,
		errorMsgConfirmPass
	}
}