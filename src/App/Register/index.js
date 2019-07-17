import React from 'react'
import { Submit } from './Submit'
import { container, wrapper, label, input } from './styles'

export const Register = () => {
	return (
		<form style={container}>
			<div style={wrapper}>
				<label style={label} htmlFor='cnpj'>CNPJ</label>
				<input style={input} type='text' name='cnpj' id='cnpj' />
			</div>
			<Submit />
		</form>
	)
}