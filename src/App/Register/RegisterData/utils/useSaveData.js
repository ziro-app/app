import { useState } from 'react'
import { useLocation } from 'wouter'
import { validateForm } from './validateForm'

export const useSaveData = (name, phone, pass, confirmPass, serErrorName, setErrorPhone, setErrorPass, setErrorConfirmPass, cnpjIsValid, setCnpjIsValid, setDirection) => {
	const [errorSave, setErrorSave] = useState('')
	const [, setLocation] = useLocation()
	const saveForm = async event => {
		event.preventDefault()
		const { formIsValid, errorMsgName, errorMsgPhone, errorMsgPass, errorMsgConfirmPass } = validateForm(name, phone, pass, confirmPass)
		setErrorName(errorMsgName)
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