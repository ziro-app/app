import React from 'react'
import { useForm } from './utils/useForm'
import { useCnpjApi } from './utils/useCnpjApi'
import { Submit } from './Submit'
import { CnpjIcon } from '../../../Assets/CnpjIcon/index'
import { container, welcome, subtitle, dot, instructions, text, cnae, form, wrapper, labelCnpj, inputCnpj } from './styles'

export const RegisterCnpj = () => {
	const [cnpj, errorCnpj, setErrorCnpj, handleCnpj] = useForm()
	const [submitting, errorSubmit, submitForm] = useCnpjApi(cnpj, setErrorCnpj)
	return (
		<div style={container}>
			<h1 style={welcome}><label style={subtitle}>Passo 1</label><label style={dot}>.</label><br/>Valide seu CNPJ</h1>
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