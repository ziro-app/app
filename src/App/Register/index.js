import React from 'react'
import { useForm } from './utils/useForm'
import { Submit } from './Submit'
import { Errors } from './Errors'
import { CnpjIcon } from '../../Assets/CnpjIcon/index'
import { container, instructions, text, cnae, form, wrapper, label, input } from './styles'

export const Register = () => {
	const { cnpj, handleCnpj, submitForm } = useForm()
	return (
		<div style={container} onSubmit={submitForm}>
			<div style={instructions}>
				<p style={text}>Valide seu CNPJ, cuja atividade primária ou secundária deve conter:</p>
				<p style={text}><label style={cnae}>4781-4/00</label> - Comércio varejista de artigos do vestuário e acessórios</p>
			</div>
			<form style={form}>
				<div style={wrapper}>
					<label style={label} htmlFor='cnpj'><CnpjIcon size={14} />CNPJ</label>
					<input style={input} onChange={handleCnpj} value={cnpj} placeholder='mínimo 13 caracteres' type='text' name='cnpj' id='cnpj' />
					<Errors message={'Mínimo 13 caracteres'} />
				</div>
				<Submit />
			</form>
		</div>
	)
}