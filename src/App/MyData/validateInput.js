export const validateInput = (condition, message, setError) => {
	if (condition) {
		setError(message)
		return false
	} else {
		setError('')
		return true
	}
}