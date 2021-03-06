import { useState } from 'react'
import maskInput from '@ziro/mask-input'
import capitalize from '@ziro/capitalize'

export const useForm = (setFname, setLname, setRg, setCpf, setBirth, setCountry, setPhone, setPass, setConfirmPass, country) => {
	const [errorFname, setErrorFname] = useState('')
	const [errorLname, setErrorLname] = useState('')
	const [errorRg, setErrorRg] = useState('')
	const [errorCpf, setErrorCpf] = useState('')
	const [errorBirth, setErrorBirth] = useState('')
	const [errorCountry, setErrorCountry] = useState('')
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
	const handleRg = event => {
		setRg(maskInput(event.target.value, '############', true))
		if (errorRg !== '') setErrorRg('')
	}
	const handleCpf = event => {
		setCpf(maskInput(event.target.value, '###.###.###-##', true))
		if (errorCpf !== '') setErrorCpf('')
	}
	const handleBirth = event => {
		setBirth(maskInput(event.target.value, '##/##/####', true))
		if (errorBirth !== '') setErrorBirth('')
	}
	const handleCountry = event => {
		setCountry(maskInput(event.target.value, '+###', true))
		if (errorCountry !== '') setErrorCountry('')
	}
	const handlePhone = event => {
		if (country !== '+55') setPhone(maskInput(event.target.value, '############', true))
		else setPhone(maskInput(event.target.value, '(##) #####-####', true))
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
		errorRg, setErrorRg, handleRg,
		errorCpf, setErrorCpf, handleCpf,
		errorBirth, setErrorBirth, handleBirth,		
		errorCountry, setErrorCountry, handleCountry,
		errorPhone, setErrorPhone, handlePhone,
		errorPass, setErrorPass, handlePass,
		errorConfirmPass, setErrorConfirmPass, handleConfirmPass
	]
}