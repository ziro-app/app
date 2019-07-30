import React from 'react'
import { PropTypes } from 'prop-types'
import { Submit } from './Submit'
import { NameIcon } from '../../../Assets/NameIcon/index'
import { container, welcome, subtitle, dot, form, wrapper, labelEmail, inputEmail, instructions, text } from './styles'

export const RegisterEmail = ({ name, setName }) => {
	return (
		<div style={container}>
			<h1 style={welcome}><label style={subtitle}>Passo 3</label><label style={dot}>.</label><br/>Preencha seus dados</h1>
			<form style={form} onSubmit={e => e.preventDefault()}>
				<div style={wrapper}>
					<label style={labelEmail} htmlFor='name'><NameIcon size={13} />Nome completo</label>
					<input style={inputEmail} onChange={e => setName(e.target.value)} value={name} disabled={false} placeholder='nome@exemplo.com' type='text' name='name' id='name' />
				</div>
				<div style={instructions}>
					<p style={text}>Clique no link de confirmação que será enviado para sua caixa</p>
				</div>
				<Submit submitting={false} errorEmail={''} errorSubmit={''} />
			</form>
		</div>
	)
}

RegisterEmail.propTypes = {
	name: PropTypes.string.isRequired,
	setName: PropTypes.func.isRequired
}