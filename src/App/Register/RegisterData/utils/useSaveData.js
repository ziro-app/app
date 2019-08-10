import { useState } from 'react'
import { useLocation } from 'wouter'
import { validateForm } from './validateForm'

export const useSaveData = (fname, lname, country, phone, pass, confirmPass, setErrorFname, setErrorLname, setErrorCountry, setErrorPhone, setErrorPass, setErrorConfirmPass, setDirection) => {
	const [errorSave, setErrorSave] = useState('')
	const [, setLocation] = useLocation()
	const saveForm = event => {
		event.preventDefault()
		const { formIsValid, errorMsgFname, errorMsgLname, errorMsgCountry, errorMsgPhone, errorMsgPass, errorMsgConfirmPass } = validateForm(fname, lname, country, phone, pass, confirmPass)
		setErrorFname(errorMsgFname)
		setErrorLname(errorMsgLname)
		setErrorCountry(errorMsgCountry)
		setErrorPhone(errorMsgPhone)
		setErrorPass(errorMsgPass)
		setErrorConfirmPass(errorMsgConfirmPass)
		if (formIsValid) {
			setLocation('/cadastrar/email')
			setDirection('forward')
			setErrorSave('')
		} else {
			setErrorSave('Verifique erros no formulário')
		}
	}
	return [errorSave, saveForm]
}