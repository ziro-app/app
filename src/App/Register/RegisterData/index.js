import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from './utils/useForm'
import { useSaveData } from './utils/useSaveData'
import InputText from '@bit/vitorbarbosa19.ziro.input-text'
import { Submit } from './Submit'
import { Errors } from './Errors'
import Icon from '@bit/vitorbarbosa19.ziro.icon'
import { PhoneIcon } from '../../../Assets/PhoneIcon/index'
import { form, wrapper, label, input, wrapperPhone } from './styles'

export const RegisterData = ({ fname, setFname, lname, setLname, country, setCountry, phone, setPhone, pass, setPass, confirmPass, setConfirmPass, goForward }) => {
	const [
		errorFname, setErrorFname, handleFname,
		errorLname, setErrorLname, handleLname,
		errorCountry, setErrorCountry, handleCountry,
		errorPhone, setErrorPhone, handlePhone,
		errorPass, setErrorPass, handlePass,
		errorConfirmPass, setErrorConfirmPass, handleConfirmPass
	] = useForm(setFname, setLname, setCountry, setPhone, setPass, setConfirmPass, country)
	const [errorSave, saveForm] = useSaveData(fname, lname, country, phone, pass, confirmPass,
		setErrorFname, setErrorLname, setErrorCountry, setErrorPhone, setErrorPass,
		setErrorConfirmPass, goForward)
	return (
		<form style={form} onSubmit={saveForm}>
			<div style={wrapper}>
				<label style={label} htmlFor='fname'>
					<Icon type='user' size={13} />Nome<Errors message={errorFname} />
				</label>
				<InputText
					style={input}
					value={fname}
					onChange={handleFname}
					placeholder='Fernando(a)'
					name='fname'
					id='fname'
				/>
			</div>
			<div style={wrapper}>
				<label style={label} htmlFor='lname'>
					<Icon type='user' size={13} />Sobrenome<Errors message={errorLname} />
				</label>
				<InputText
					style={input}
					value={lname}
					onChange={handleLname}
					placeholder='Santos Silva'
					name='lname'
					id='lname'
				/>
			</div>
			<div style={wrapper}>
				<label style={label} htmlFor='phone'>
					<PhoneIcon size={13} />Whatsapp<Errors message={errorPhone || errorCountry} />
				</label>
				<div style={wrapperPhone}>
					<InputText
						style={input}
						value={country}
						onChange={handleCountry}
						name='country'
						id='country'
					/>
					<InputText
						style={input}
						value={phone}
						onChange={handlePhone}
						placeholder='(11) 92233-4455'
						name='phone'
						id='phone'
					/>
				</div>
			</div>
			<div style={wrapper}>
				<label style={label} htmlFor='pass'>
					<Icon type='lock' size={13} />Senha<Errors message={errorPass} />
				</label>
				<InputText
					style={input}
					value={pass}
					onChange={handlePass}
					placeholder='mínimo 8 caracteres'
					name='pass'
					id='pass'
					type='password'
				/>
			</div>
			<div style={wrapper}>
				<label style={label} htmlFor='confirmpass'>
					<Icon type='lock' size={13} />Repetir senha<Errors message={errorConfirmPass} />
				</label>
				<InputText
					style={input}
					value={confirmPass}
					onChange={handleConfirmPass}
					placeholder='confirme sua senha'
					name='confirmPass'
					id='confirmPass'
					type='password'
				/>
			</div>
			<Submit errorSave={errorSave} />
		</form>
	)
}

RegisterData.propTypes = {
	fname: PropTypes.string.isRequired,
	setFname: PropTypes.func.isRequired,
	lname: PropTypes.string.isRequired,
	setLname: PropTypes.func.isRequired,
	country: PropTypes.string.isRequired,
	setCountry: PropTypes.func.isRequired,
	phone: PropTypes.string.isRequired,
	setPhone: PropTypes.func.isRequired,
	pass: PropTypes.string.isRequired,
	setPass: PropTypes.func.isRequired,
	confirmPass: PropTypes.string.isRequired,
	setConfirmPass: PropTypes.func.isRequired,
	goForward: PropTypes.func.isRequired
}