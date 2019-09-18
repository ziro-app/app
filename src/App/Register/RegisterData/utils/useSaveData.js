import { useState } from 'react'
import { useLocation } from 'wouter'
import { validateForm } from './validateForm'

export const useSaveData = (fname, lname, rg, cpf, birth, country, phone, pass, confirmPass, setErrorFname, setErrorLname, setErrorRg, setErrorCpf, setErrorBirth, setErrorCountry, setErrorPhone, setErrorPass, setErrorConfirmPass, goForward) => {
	const [errorSave, setErrorSave] = useState('')
	const [, setLocation] = useLocation()
	const saveForm = event => {
		event.preventDefault()
		const { formIsValid, errorMsgFname, errorMsgLname, errorMsgRg, errorMsgCpf, errorMsgBirth, errorMsgCountry, errorMsgPhone,
			errorMsgPass, errorMsgConfirmPass } = validateForm(fname, lname, rg, cpf, birth, country, phone, pass, confirmPass)
		setErrorFname(errorMsgFname)
		setErrorLname(errorMsgLname)
		setErrorRg(errorMsgRg)
		setErrorCpf(errorMsgCpf)
		setErrorBirth(errorMsgBirth)
		setErrorCountry(errorMsgCountry)
		setErrorPhone(errorMsgPhone)
		setErrorPass(errorMsgPass)
		setErrorConfirmPass(errorMsgConfirmPass)
		if (formIsValid) {
			setLocation('/cadastrar/email')
			goForward()
			setErrorSave('')
		} else {
			setErrorSave('Verifique erros no formulário')
		}
	}
	return [errorSave, saveForm]
}