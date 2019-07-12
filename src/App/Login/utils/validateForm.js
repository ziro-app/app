export const validateForm = (email, password) => {
	const emailIsValid = !!email
	const passwordIsValid = !!password
	return emailIsValid && passwordIsValid
}