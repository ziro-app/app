import React from 'react'
import { Submit } from './Submit'
import { Errors } from './Errors'
import { CnpjIcon } from '../../Assets/CnpjIcon/index'
import { container, instructions, text, cnae, form, wrapper, label, input } from './styles'

export const Register = () => {
	return (
		<div style={container}>
			<div style={instructions}>
				<p style={text}>Valide seu CNPJ, cuja atividade primária ou secundária deve conter:</p>
				<p style={text}><label style={cnae}>4781-4/00</label> - Comércio varejista de artigos do vestuário e acessórios</p>
			</div>
			<form style={form}>
				<div style={wrapper}>
					<label style={label} htmlFor='cnpj'><CnpjIcon size={15} />CNPJ</label>
					<input style={input} type='text' name='cnpj' id='cnpj' />
					<Errors message={'Deve conter 13 caracteres'} />
				</div>
				<Submit />
			</form>
		</div>
	)
}