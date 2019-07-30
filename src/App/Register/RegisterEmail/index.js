import React from 'react'
import { PropTypes } from 'prop-types'
import { Submit } from './Submit'
import { EmailIcon } from '../../../Assets/EmailIcon/index'
import { container, welcome, subtitle, dot, form, wrapper, labelEmail, inputEmail, instructions, text } from './styles'

export const RegisterEmail = ({ email, setEmail }) => {
	return (
		<div style={container}>
			<h1 style={welcome}><label style={subtitle}>Passo 3</label><label style={dot}>.</label><br/>Valide seu email</h1>
			<form style={form} onSubmit={e => e.preventDefault()}>
				<div style={wrapper}>
					<label style={labelEmail} htmlFor='email'><EmailIcon size={13} />Email</label>
					<input style={inputEmail} onChange={e => setEmail(e.target.value)} value={email} disabled={false} placeholder='nome@exemplo.com' type='text' name='email' id='email' />
				</div>
				<div style={instructions}>
					<p style={text}>Será enviado um email de confirmação para sua caixa</p>
				</div>
				<Submit submitting={false} errorEmail={''} errorSubmit={''} />
			</form>
		</div>
	)
}

RegisterEmail.propTypes = {
	email: PropTypes.string.isRequired,
	setEmail: PropTypes.func.isRequired
}