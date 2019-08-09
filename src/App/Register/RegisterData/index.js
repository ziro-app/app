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
import { container, success, message, welcome, subtitle, dot, form, wrapper, label, input, wrapperPhone } from './styles'

export const RegisterData = ({ fname, setFname, lname, setLname, phone, setPhone, pass, setPass, confirmPass, setConfirmPass, setDirection }) => {
	const [
		errorFname, setErrorFname, handleFname,
		errorLname, setErrorLname, handleLname,
		errorPhone, setErrorPhone, handlePhone,
		errorPass, setErrorPass, handlePass,
		errorConfirmPass, setErrorConfirmPass, handleConfirmPass
	] = useForm(
		setFname, setLname, setPhone, setPass, setConfirmPass,
		setErrorFname, setErrorLname, setErrorPhone, setErrorPass, setErrorConfirmPass
	)
	const [errorSave, saveForm] = useSaveData(fname, lname, phone, pass, confirmPass, setErrorFname, setErrorLname, setErrorPhone, setErrorPass, setErrorConfirmPass, setDirection)
	return (
		<div style={container}>
			<div style={success}>
				<label style={message}><SuccessIcon size={14} color={successColor} />CNPJ validado com sucesso!</label>
				<h1 style={welcome}><label style={subtitle}>Passo 2</label><label style={dot}>.</label><br/>Preencha seus dados</h1>
			</div>
			<form style={form} onSubmit={saveForm}>
				<div style={wrapper}>
					<label style={label} htmlFor='fname'><NameIcon size={13} />Nome<Errors message={errorFname} /></label>
					<input style={input} onChange={handleFname} value={fname} placeholder='Fernando(a)' type='text' name='fname' id='fname' />
				</div>
				<div style={wrapper}>
					<label style={label} htmlFor='lname'><NameIcon size={13} />Sobrenome<Errors message={errorLname} /></label>
					<input style={input} onChange={handleLname} value={lname} placeholder='Santos Silva' type='text' name='lname' id='lname' />
				</div>
				<div style={wrapper}>
					<label style={label} htmlFor='phone'><PhoneIcon size={13} />Whatsapp<Errors message={errorPhone} /></label>
					<div style={wrapperPhone}>
						<input style={input} onChange={() => console.log(e.target.value)} value={55} type='text' name='country' id='country' />
						<input style={input} onChange={handlePhone} value={phone} placeholder='(11) 92233-4455' type='text' name='phone' id='phone' />
					</div>
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
	fname: PropTypes.string.isRequired,
	setFname: PropTypes.func.isRequired,
	lname: PropTypes.string.isRequired,
	setLname: PropTypes.func.isRequired,
	phone: PropTypes.string.isRequired,
	setPhone: PropTypes.func.isRequired,
	pass: PropTypes.string.isRequired,
	setPass: PropTypes.func.isRequired,
	confirmPass: PropTypes.string.isRequired,
	setConfirmPass: PropTypes.func.isRequired,
	setDirection: PropTypes.func.isRequired
}