import React from 'react'
import { PropTypes } from 'prop-types'
import { useForm } from './utils/useForm'
import { useCnpjApi } from './utils/useCnpjApi'
import { Submit } from './Submit'
import { CnpjIcon } from '../../../Assets/CnpjIcon/index'
import { container, form, wrapper, labelCnpj, inputCnpj, instructions, text, cnae } from './styles'

export const RegisterCnpj = ({ cnpj, setCnpj, cnpjIsValid, setCnpjIsValid, setDirection }) => {
	const [errorCnpj, setErrorCnpj, handleCnpj] = useForm(setCnpj, setCnpjIsValid)
	const [submitting, errorSubmit, submitForm] = useCnpjApi(cnpj, setErrorCnpj, cnpjIsValid, setCnpjIsValid, setDirection)
	return (
		<div style={container}>			
			<form style={form} onSubmit={submitForm}>
				<div style={wrapper}>
					<label style={labelCnpj} htmlFor='cnpj'><CnpjIcon size={13} />CNPJ</label>
					<input style={inputCnpj} onChange={handleCnpj} value={cnpj} disabled={submitting} placeholder='11.222.333/0001-44' type='text' name='cnpj' id='cnpj' />
				</div>
				<div style={instructions}>
					<p style={text}>Seu CNPJ deve conter como atividade primária ou secundária:</p>
					<p style={text}><label style={cnae}>CNAE 4781-4/00</label><br/>Comércio varejista de artigos do vestuário e acessórios</p>
				</div>
				<Submit submitting={submitting} errorCnpj={errorCnpj} errorSubmit={errorSubmit} />
			</form>
		</div>
	)
}

RegisterCnpj.propTypes = {
	cnpj: PropTypes.string.isRequired,
	setCnpj: PropTypes.func.isRequired,
	cnpjIsValid: PropTypes.bool.isRequired,
	setCnpjIsValid: PropTypes.func.isRequired,
	setDirection: PropTypes.func.isRequired
}