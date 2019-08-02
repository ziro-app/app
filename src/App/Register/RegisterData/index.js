import React from 'react'
import { PropTypes } from 'prop-types'
import { useForm } from './utils/useForm'
import { useSaveData } from './utils/useSaveData'
import { Submit } from './Submit'
import { Errors } from './Errors'
import { SuccessIcon } from '../../../Assets/SuccessIcon/index'
import { NameIcon } from '../../../Assets/NameIcon/index'
import { PhoneIcon } from '../../../Assets/PhoneIcon/index'
import { PasswordIcon } from '../../../Assets/PasswordIcon/index'
import { successColor } from '../../../Theme/styleVariables'
import { container, success, message, welcome, subtitle, dot, form, wrapper, label, input } from './styles'

export const RegisterData = ({ name, setName, phone, setPhone, pass, setPass, confirmPass, setConfirmPass, setDirection }) => {
	const [
		errorName, setErrorName, handleName,
		errorPhone, setErrorPhone, handlePhone,
		errorPass, setErrorPass, handlePass,
		errorConfirmPass, setErrorConfirmPass, handleConfirmPass
	] = useForm(
		setName, setPhone, setPass, setConfirmPass,
		setErrorName, setErrorPhone, setErrorPass, setErrorConfirmPass
	)
	const [errorSave, saveForm] = useSaveData(name, phone, pass, confirmPass, setErrorName, setErrorPhone, setErrorPass, setErrorConfirmPass, setDirection)
	return (
		<div style={container}>
			<div style={success}>
				<label style={message}><SuccessIcon size={14} color={successColor} />CNPJ validado com sucesso!</label>
				<h1 style={welcome}><label style={subtitle}>Passo 2</label><label style={dot}>.</label><br/>Preencha seus dados</h1>
			</div>
			<form style={form} onSubmit={saveForm}>
				<div style={wrapper}>
					<label style={label} htmlFor='name'><NameIcon size={13} />Nome<Errors message={errorName} /></label>
					<input style={input} onChange={handleName} value={name} placeholder='Fernando(a) Silva' type='text' name='name' id='name' />
				</div>
				<div style={wrapper}>
					<label style={label} htmlFor='phone'><PhoneIcon size={13} />Whatsapp<Errors message={errorPhone} /></label>
					<input style={input} onChange={handlePhone} value={phone} placeholder='(11) 92233-4455' type='text' name='phone' id='phone' />
				</div>
				<div style={wrapper}>
					<label style={label} htmlFor='pass'><PasswordIcon size={13} />Senha<Errors message={errorPass} /></label>
					<input style={input} onChange={handlePass} value={pass} placeholder='mínimo 8 caracteres' type='password' name='pass' id='pass' />
				</div>
				<div style={wrapper}>
					<label style={label} htmlFor='confirmpass'><PasswordIcon size={13} />Repetir senha<Errors message={errorConfirmPass} /></label>
					<input style={input} onChange={handleConfirmPass} value={confirmPass} placeholder='confirme sua senha' type='password' name='confirmpass' id='confirmpass' />
				</div>
				<Submit errorSave={errorSave} />
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
	setConfirmPass: PropTypes.func.isRequired,
	setDirection: PropTypes.func.isRequired
}