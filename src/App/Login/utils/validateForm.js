export const validateForm = (email, password) => {
	const emailIsValid = /^\S+@\S+\.\S+$/g.test(email) // tests for pattern a@b.c
	const passwordIsValid = !/^.{0,7}$/g.test(password) // tests for min length of 8 char
	const errorMsgEmail = emailIsValid ? '' : 'Formato inválido'
	const errorMsgPassword = passwordIsValid ? '' : 'Mínimo de 8 caracteres'
	const formIsValid = emailIsValid && passwordIsValid
	return {
		formIsValid,
		errorMsgEmail,
		errorMsgPassword
	}
}