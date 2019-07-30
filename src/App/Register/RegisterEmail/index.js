import React from 'react'
import { PropTypes } from 'prop-types'
import { EmailIcon } from '../../../Assets/EmailIcon/index'
import { container, welcome, subtitle, dot, form, wrapper, labelEmail, inputEmail, instructions, text } from './styles'

export const RegisterEmail = ({ email, setEmail }) => {
	return (
		<div style={container}>
			<h1 style={welcome}><label style={subtitle}>Passo 2</label><label style={dot}>.</label><br/>Valide seu email</h1>
			<form style={form} onSubmit={e => e.preventDefault()}>
				<div style={wrapper}>
					<label style={labelEmail} htmlFor='email'><EmailIcon size={13} />Email</label>
					<input style={inputEmail} onChange={e => setEmail(e.target.value)} value={email} disabled={false} placeholder='nome@exemplo.com' type='text' name='email' id='email' />
				</div>
				<div style={instructions}>
					<p style={text}>Clique no link de confirmação que será enviado para sua caixa</p>
				</div>
				{/*<Submit submitting={submitting} errorEmail={errorEmail} errorSubmit={errorSubmit} />*/}
			</form>
		</div>
	)
}

RegisterEmail.propTypes = {
	email: PropTypes.string.isRequired,
	setEmail: PropTypes.func.isRequired
}