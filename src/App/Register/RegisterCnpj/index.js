import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from './utils/useForm'
import { useCnpjApi } from './utils/useCnpjApi'
import InputText from '@bit/vitorbarbosa19.ziro.input-text'
import Icon from '@bit/vitorbarbosa19.ziro.icon'
import { Submit } from './Submit'
import { form, wrapper, label, input, instructions, cnae } from './styles'

export const RegisterCnpj = ({ cnpj, setCnpj, razao, setRazao, fantasia, setFantasia, rua, setRua, numero, setNumero, complemento, setComplemento, bairro, setBairro, cep, setCep, cidade, setCidade, estado, setEstado, cnpjIsValid, setCnpjIsValid, goForward }) => {
	const [errorCnpj, setErrorCnpj, handleCnpj] = useForm(setCnpj, setCnpjIsValid)
	const [submitting, errorSubmit, submitForm] = useCnpjApi(cnpj, razao, setRazao, fantasia, setFantasia,
		rua, setRua, numero, setNumero, complemento, setComplemento, bairro, setBairro, cep, setCep,
		cidade, setCidade, estado, setEstado, setErrorCnpj, cnpjIsValid, setCnpjIsValid, goForward)
	return (	
		<form style={form} onSubmit={submitForm}>
			<div style={wrapper}>
				<label style={label} htmlFor='cnpj'><Icon type='cnpj' size={13} />CNPJ</label>
				<InputText
					style={input}
					value={cnpj}
					submitting={submitting}
					onChange={handleCnpj}
					placeholder='11.222.333/0001-44'
					name='cnpj'
					id='cnpj'
				/>
			</div>
			<div style={instructions}>
				<label>Seu CNPJ deve conter como atividade primária ou secundária:</label>
				<label><label style={cnae}>CNAE 4781-4/00</label><br/>Comércio varejista de artigos do vestuário e acessórios</label>
			</div>
			<Submit submitting={submitting} errorCnpj={errorCnpj} errorSubmit={errorSubmit} />
		</form>
	)
}

RegisterCnpj.propTypes = {
	cnpj: PropTypes.string.isRequired,
	setCnpj: PropTypes.func.isRequired,
	razao: PropTypes.string.isRequired,
	setRazao: PropTypes.func.isRequired,
	fantasia: PropTypes.string.isRequired,
	setFantasia: PropTypes.func.isRequired,
	rua: PropTypes.string.isRequired,
	setRua: PropTypes.func.isRequired,
	numero: PropTypes.string.isRequired,
	setNumero: PropTypes.func.isRequired,
	complemento: PropTypes.string.isRequired,
	setComplemento: PropTypes.func.isRequired,
	bairro: PropTypes.string.isRequired,
	setBairro: PropTypes.func.isRequired,
	cep: PropTypes.string.isRequired,
	setCep: PropTypes.func.isRequired,
	cidade: PropTypes.string.isRequired,
	setCidade: PropTypes.func.isRequired,
	estado: PropTypes.string.isRequired,
	setEstado: PropTypes.func.isRequired,
	cnpjIsValid: PropTypes.bool.isRequired,
	setCnpjIsValid: PropTypes.func.isRequired,
	goForward: PropTypes.func.isRequired
}