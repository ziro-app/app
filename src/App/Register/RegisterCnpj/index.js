import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from './utils/useForm'
import { useCnpjApi } from './utils/useCnpjApi'
import InputText from '@bit/vitorbarbosa19.ziro.input-text'
import Icon from '@bit/vitorbarbosa19.ziro.icon'
import { Submit } from './Submit'
import { form, wrapper, label, input, instructions, cnae } from './styles'

export const RegisterCnpj = ({ cnpj, setCnpj, cnpjIsValid, setCnpjIsValid, goForward }) => {
	const [errorCnpj, setErrorCnpj, handleCnpj] = useForm(setCnpj, setCnpjIsValid)
	const [submitting, errorSubmit, submitForm] = useCnpjApi(cnpj, setErrorCnpj, cnpjIsValid, setCnpjIsValid, goForward)
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
	cnpjIsValid: PropTypes.bool.isRequired,
	setCnpjIsValid: PropTypes.func.isRequired,
	goForward: PropTypes.func.isRequired
}