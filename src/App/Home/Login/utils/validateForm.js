export const validateForm = (email, password) => {
	const emailIsValid = /^\S+@\S+\.\S+$/g.test(email) // tests for pattern a@b.c
	const passwordIsValid = !/^.{0,5}$/g.test(password) // tests for min length of 6 char
	const errorMsgEmail = emailIsValid ? '' : 'Formato inválido'
	const errorMsgPassword = passwordIsValid ? '' : 'Mínimo 6 caracteres'
	const formIsValid = emailIsValid && passwordIsValid
	return {
		formIsValid,
		errorMsgEmail,
		errorMsgPassword
	}
}