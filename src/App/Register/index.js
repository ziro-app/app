import React from 'react'
import { Submit } from './Submit'
import { Errors } from './Errors'
import { CnpjIcon } from '../../Assets/CnpjIcon/index'
import { container, wrapper, label, input } from './styles'

export const Register = () => {
	return (
		<form style={container}>
			<div style={wrapper}>
				<label style={label} htmlFor='cnpj'><CnpjIcon size={15} />CNPJ</label>
				<input style={input} type='text' name='cnpj' id='cnpj' />
				<Errors message={'CNPJ inválido'} />
			</div>
			<Submit />
		</form>
	)
}