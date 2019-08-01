export const validateInput = email => {
	const emailIsValid = /^\S+@\S+\.\S+$/g.test(email) // tests for pattern a@b.c
	const errorMsgEmail = emailIsValid ? '' : 'Email com formato inválido'
	return { emailIsValid, errorMsgEmail }
}