export const validateForm = (fname, lname, rg, cpf, birth, country, phone, pass, confirmPass) => {
	const fnameIsValid = Boolean(fname)
	const lnameIsValid = Boolean(lname)
	const rgIsValid = Boolean(rg)
	const cpfIsValid = cpf.length >= 14
	const birthIsValid = birth.length === 10
	const countryIsValid = country.length >= 2
	const phoneIsValid = country === '+55' ? phone.length >= 14 : phone.length >= 9
	const passIsValid = !/^.{0,5}$/g.test(pass) // tests for min length of 6 char
	const confirmPassIsValid = pass === confirmPass
	// error messages
	const errorMsgFname = fnameIsValid ? '' : 'Campo obrigatório'
	const errorMsgLname = lnameIsValid ? '' : 'Campo obrigatório'
	const errorMsgRg = rgIsValid ? '' : 'Campo obrigatório'
	const errorMsgCpf = cpfIsValid ? '' : 'Formato inválido'
	const errorMsgBirth = birthIsValid ? '' : 'Formato inválido'
	const errorMsgCountry = countryIsValid ? '' : 'Digite cód. país. BR é 55'
	const errorMsgPhone = phoneIsValid ? '' : 'Formato inválido'
	const errorMsgPass = passIsValid ? '' : 'Mínimo 6 caracteres'
	const errorMsgConfirmPass = confirmPassIsValid ? '' : 'Valor não confere'
	const formIsValid = fnameIsValid && lnameIsValid && rgIsValid && cpfIsValid && birthIsValid && countryIsValid && phoneIsValid && passIsValid && confirmPassIsValid
	return {
		formIsValid,
		errorMsgFname,
		errorMsgLname,
		errorMsgRg,
		errorMsgCpf,
		errorMsgBirth,
		errorMsgCountry,
		errorMsgPhone,
		errorMsgPass,
		errorMsgConfirmPass
	}
}