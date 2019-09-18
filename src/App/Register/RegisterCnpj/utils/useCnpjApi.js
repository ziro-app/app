import { useState } from 'react'
import { post } from 'axios'
import { useLocation } from 'wouter'
import { db } from '../../../../Firebase/index'
import { validateInput } from './validateInput'
import { validateCnpj } from './validateCnpj'

export const useCnpjApi = (cnpj, setRazao, setFantasia, setRua, setNumero, setComplemento, setBairro, setCep, setCidade, setEstado, setErrorCnpj, cnpjIsValid, setCnpjIsValid, goForward) => {
	const [submitting, setSubmitting] = useState(false)
	const [errorSubmit, setErrorSubmit] = useState('')
	const [location, setLocation] = useLocation()
	const submitForm = async event => {
		event.preventDefault()
		if (cnpjIsValid) {
			setLocation('/cadastrar/dados')
			goForward()
		}
		else {
			const { inputIsValid, errorMsgCnpj } = validateInput(cnpj)
			setErrorCnpj(errorMsgCnpj)
			if (inputIsValid) {
				try {
					setSubmitting(true)
					const { empty } = await db.collection('cnpjs').where('cnpj', '==', cnpj).get()
					if (!empty) {
						setSubmitting(false)
						setErrorSubmit('CNPJ já cadastrado na base')
					} else {
						const { data: { message, data } } = await post(`${process.env.CNPJ_API}`, { cnpj })
						setSubmitting(false)
						if (data.return !== 'OK')
							setErrorSubmit('CNPJ não encontrado na Receita')
						if (message !== 'Success') {
							console.log(message)
							setErrorSubmit('Erro no serviço. Tente mais tarde')					
						}
						if (data.return === 'OK' && message === 'Success') {
							const { status, message } = validateCnpj(data)
							setErrorSubmit(message)
							if (status === 'Success') {
								console.log(data.result)
								setRazao(data.result.nome)
								setFantasia(data.result.fantasia)
								setRua(data.result.logradouro)
								setNumero(data.result.numero)
								setComplemento(data.result.complemento)
								setBairro(data.result.bairro)
								setCep(data.result.cep)
								setCidade(data.result.municipio)
								setEstado(data.result.uf)
								setCnpjIsValid(true)
								setLocation('/cadastrar/dados')
								goForward()
							}
						}
					}
				} catch (error) {
					console.log(error)
					setSubmitting(false)
					setErrorSubmit('Erro na conexão. Tente mais tarde')
				}
			}
		}
	}
	return [submitting, errorSubmit, submitForm]
}