import { useState } from 'react'
import { maskInput } from '../../../utils/maskInput'
import { capitalize } from '../../../utils/capitalize'

export const useForm = (setFname, setLname, setPhone, setPass, setConfirmPass) => {
	const [errorFname, setErrorFname] = useState('')
	const [errorLname, setErrorLname] = useState('')
	const [errorPhone, setErrorPhone] = useState('')
	const [errorPass, setErrorPass] = useState('')
	const [errorConfirmPass, setErrorConfirmPass] = useState('')
	const handleFname = event => {
		setFname(capitalize(event.target.value))
		if (errorFname !== '') setErrorFname('')
	}
	const handleLname = event => {
		setLname(capitalize(event.target.value))
		if (errorLname !== '') setErrorLname('')
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
		errorFname, setErrorFname, handleFname,
		errorLname, setErrorLname, handleLname,
		errorPhone, setErrorPhone, handlePhone,
		errorPass, setErrorPass, handlePass,
		errorConfirmPass, setErrorConfirmPass, handleConfirmPass
	]
}