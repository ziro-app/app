import React from 'react'
import { PropTypes } from 'prop-types'
import { useForm } from './utils/useForm'
import { useCnpjApi } from './utils/useCnpjApi'
import { Submit } from './Submit'
import { CnpjIcon } from '../../../Assets/CnpjIcon/index'
import { form, wrapper, label, input, instructions, cnae } from './styles'

export const RegisterCnpj = ({ cnpj, setCnpj, cnpjIsValid, setCnpjIsValid, goForward }) => {
	const [errorCnpj, setErrorCnpj, handleCnpj] = useForm(setCnpj, setCnpjIsValid)
	const [submitting, errorSubmit, submitForm] = useCnpjApi(cnpj, setErrorCnpj, cnpjIsValid, setCnpjIsValid, goForward)
	return (	
		<form style={form} onSubmit={submitForm}>
			<div style={wrapper}>
				<label style={label} htmlFor='cnpj'><CnpjIcon size={13} />CNPJ</label>
				<input style={input} onChange={handleCnpj} value={cnpj} disabled={submitting} placeholder='11.222.333/0001-44' type='text' name='cnpj' id='cnpj' />
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