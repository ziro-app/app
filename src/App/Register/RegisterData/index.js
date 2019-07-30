import React from 'react'
import { PropTypes } from 'prop-types'
import { Submit } from './Submit'
import { NameIcon } from '../../../Assets/NameIcon/index'
import { container, welcome, subtitle, dot, form, wrapper, label, input, instructions, text } from './styles'

export const RegisterData = ({ name, setName, phone, setPhone, pass, setPass }) => {
	return (
		<div style={container}>
			<h1 style={welcome}><label style={subtitle}>Passo 2</label><label style={dot}>.</label><br/>Preencha seus dados</h1>
			<form style={form} onSubmit={e => e.preventDefault()}>
				<div style={wrapper}>
					<label style={label} htmlFor='name'><NameIcon size={13} />Nome completo</label>
					<input style={input} onChange={e => setName(e.target.value)} value={name} disabled={false} placeholder='Fernando(a) da Silva' type='text' name='name' id='name' />
				</div>
				<div style={wrapper}>
					<label style={label} htmlFor='phone'><NameIcon size={13} />Whatsapp</label>
					<input style={input} onChange={e => setPhone(e.target.value)} value={phone} disabled={false} placeholder='(11)95177-1321' type='text' name='phone' id='phone' />
				</div>
				<div style={wrapper}>
					<label style={label} htmlFor='pass'><NameIcon size={13} />Senha</label>
					<input style={input} onChange={e => setPass(e.target.value)} value={pass} disabled={false} placeholder='Mínimo 8 caracteres' type='text' name='pass' id='pass' />
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
	setPass: PropTypes.func.isRequired
}