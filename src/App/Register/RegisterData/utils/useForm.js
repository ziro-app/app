import { useState } from 'react'
import { maskInput } from '../../../utils/maskInput'
import { capitalize } from '../../../utils/capitalize'

export const useForm = (setName, setPhone, setPass, setConfirmPass) => {
	const [errorName, setErrorName] = useState('')
	const [errorPhone, setErrorPhone] = useState('')
	const [errorPass, setErrorPass] = useState('')
	const [errorConfirmPass, setErrorConfirmPass] = useState('')
	const handleName = event => {
		setName(capitalize(event.target.value))
		if (errorName !== '') setErrorName('')
	}
	const handlePhone = event => {
		setPhone(maskInput(event.target.value, '(##) #####-####', true))
		if (errorPhone !== '') setErrorPhone('')
	}
	const handlePass = event => {
		setPass(event.target.value)
		if (errorPass !== '') setErrorPass('')
	}
	const handleConfirmPass = event => {
		setConfirmPass(event.target.value)
		if (errorConfirmPass !== '') setErrorConfirmPass('')
	}
	return [
		errorName, setErrorName, handleName,
		errorPhone, setErrorPhone, handlePhone,
		errorPass, setErrorPass, handlePass,
		errorConfirmPass, setErrorConfirmPass, handleConfirmPass
	]
}