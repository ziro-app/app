import React from 'react'
import { PropTypes } from 'prop-types'
import { Submit } from './Submit'
import { NameIcon } from '../../../Assets/NameIcon/index'
import { PhoneIcon } from '../../../Assets/PhoneIcon/index'
import { PasswordIcon } from '../../../Assets/PasswordIcon/index'
import { container, welcome, subtitle, dot, form, wrapper, label, input, instructions, text } from './styles'

export const RegisterData = ({ name, setName, phone, setPhone, pass, setPass, confirmPass, setConfirmPass }) => {
	return (
		<div style={container}>
			<h1 style={welcome}><label style={subtitle}>Passo 2</label><label style={dot}>.</label><br/>Preencha seus dados</h1>
			<form style={form} onSubmit={e => e.preventDefault()}>
				<div style={wrapper}>
					<label style={label} htmlFor='name'><NameIcon size={13} />Nome</label>
					<input style={input} onChange={e => setName(e.target.value)} value={name} disabled={false} placeholder='Fernando(a) da Silva' type='text' name='name' id='name' />
				</div>
				<div style={wrapper}>
					<label style={label} htmlFor='phone'><PhoneIcon size={13} />Whatsapp</label>
					<input style={input} onChange={e => setPhone(e.target.value)} value={phone} disabled={false} placeholder='(11) 95177-1321' type='text' name='phone' id='phone' />
				</div>
				<div style={wrapper}>
					<label style={label} htmlFor='pass'><PasswordIcon size={13} />Senha</label>
					<input style={input} onChange={e => setPass(e.target.value)} value={pass} disabled={false} placeholder='mínimo 8 caracteres' type='password' name='pass' id='pass' />
				</div>
				<div style={wrapper}>
					<label style={label} htmlFor='confirmpass'><PasswordIcon size={13} />Repetir senha</label>
					<input style={input} onChange={e => setConfirmPass(e.target.value)} value={confirmPass} disabled={false} placeholder='Confirme sua senha' type='password' name='confirmpass' id='confirmpass' />
				</div>
				<Submit submitting={false} errorName={''} errorSubmit={''} />
			</form>
		</div>
	)
}

RegisterData.propTypes = {
	name: PropTypes.string.isRequired,
	setName: PropTypes.func.isRequired,
	phone: PropTypes.string.isRequired,
	setPhone: PropTypes.func.isRequired,
	pass: PropTypes.string.isRequired,
	setPass: PropTypes.func.isRequired,
	confirmPass: PropTypes.string.isRequired,
	setConfirmPass: PropTypes.func.isRequired
}