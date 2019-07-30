import React from 'react'
import { PropTypes } from 'prop-types'
import { Submit } from './Submit'
import { NameIcon } from '../../../Assets/NameIcon/index'
import { container, welcome, subtitle, dot, form, wrapper, labelEmail, inputEmail, instructions, text } from './styles'

export const RegisterData = ({ name, setName }) => {
	return (
		<div style={container}>
			<h1 style={welcome}><label style={subtitle}>Passo 2</label><label style={dot}>.</label><br/>Preencha seus dados</h1>
			<form style={form} onSubmit={e => e.preventDefault()}>
				<div style={wrapper}>
					<label style={labelEmail} htmlFor='name'><NameIcon size={13} />Nome completo</label>
					<input style={inputEmail} onChange={e => setName(e.target.value)} value={name} disabled={false} placeholder='Fernando(a) da Silva' type='text' name='name' id='name' />
				</div>
				<Submit submitting={false} errorEmail={''} errorSubmit={''} />
			</form>
		</div>
	)
}

RegisterData.propTypes = {
	name: PropTypes.string.isRequired,
	setName: PropTypes.func.isRequired
}