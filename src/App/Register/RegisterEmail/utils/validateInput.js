export const validateInput = (email, cnpj, fname, lname, rg, cpf, birth, country, phone, pass, confirmPass) => {
	const emailIsValid = /^\S+@\S+\.\S+$/g.test(email) // tests for pattern a@b.c
	const errorMsgEmail = emailIsValid ? '' : 'Email com formato inválido'
	const inputsAreValid = !!cnpj && !!fname && !!lname && !!rg && !!cpf && !!birth && !!country && !!phone && !!pass && !!confirmPass
	const errorInputs = inputsAreValid ? '' : 'Há campos anteriores em branco'
	return { emailIsValid, errorMsgEmail, inputsAreValid, errorInputs }
}