import { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'wouter'
import { db } from '../../../../Firebase/index'
import { validateInput } from './validateInput'
import { validateCnpj } from './validateCnpj'

export const useCnpjApi = (cnpj, setRazao, setFantasia, setRua, setNumero, setComplemento, setBairro, setCep, setCidade, setEstado, setErrorCnpj, cnpjIsValid, setCnpjIsValid, goForward) => {
	const [submitting, setSubmitting] = useState(false)
	const [errorSubmit, setErrorSubmit] = useState('')
	const [location, setLocation] = useLocation()
	const config = {
		method: 'POST',
		url: process.env.CNPJ_URL,
		data: { cnpj },
		headers: {
			'Authorization': process.env.CNPJ_TOKEN
		}
	}
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
						const { data: { status, result } } = await axios(config)
						const cnaes = [...result.atividades_secundarias, result.atividade_principal].map(({ code }) => code)
						const cnaeIsValid = !!cnaes.filter(code => code === '47.81-4-00').pop()
						if (!cnaeIsValid) setErrorSubmit('CNPJ não tem CNAE 4781-4/00')
						const isActive = result.situacao === 'ATIVA'
						if (!isActive) setErrorSubmit('CNPJ não está ativo')
						// save company data
						setRazao(result.nome)
						setFantasia(result.fantasia)
						setRua(result.logradouro)
						setNumero(result.numero)
						setComplemento(result.complemento)
						setBairro(result.bairro)
						setCep(result.cep)
						setCidade(result.municipio)
						setEstado(result.uf)
						// resolve
						setCnpjIsValid(true)
						setSubmitting(false)
						setLocation('/cadastrar/dados')
						goForward()
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