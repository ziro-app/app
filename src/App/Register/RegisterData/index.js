import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from './utils/useForm'
import { useSaveData } from './utils/useSaveData'
import InputText from '@bit/vitorbarbosa19.ziro.input-text'
import Icon from '@bit/vitorbarbosa19.ziro.icon'
import { Submit } from './Submit'
import { Errors } from './Errors'
import { PhoneIcon } from '../../../Assets/PhoneIcon/index'
import { form, wrapper, label, input, wrapperPhone } from './styles'

export const RegisterData = ({ fname, setFname, lname, setLname, rg, setRg, cpf, setCpf, birth, setBirth, country, setCountry, phone, setPhone, pass, setPass, confirmPass, setConfirmPass, goForward }) => {
	const [
		errorFname, setErrorFname, handleFname,
		errorLname, setErrorLname, handleLname,
		errorRg, setErrorRg, handleRg,
		errorCpf, setErrorCpf, handleCpf,
		errorBirth, setErrorBirth, handleBirth,
		errorCountry, setErrorCountry, handleCountry,
		errorPhone, setErrorPhone, handlePhone,
		errorPass, setErrorPass, handlePass,
		errorConfirmPass, setErrorConfirmPass, handleConfirmPass
	] = useForm(setFname, setLname, setRg, setCpf, setBirth, setCountry, setPhone, setPass, setConfirmPass, country)
	const [errorSave, saveForm] = useSaveData(fname, lname, rg, cpf, birth, country, phone, pass, confirmPass,
		setErrorFname, setErrorLname, setErrorRg, setErrorCpf, setErrorBirth, setErrorCountry, setErrorPhone,
		setErrorPass, setErrorConfirmPass, goForward)
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
				<label style={label} htmlFor='rg'>
					<Icon type='id' size={13} />RG<Errors message={errorRg} />
				</label>
				<InputText
					style={input}
					value={rg}
					onChange={handleRg}
					placeholder='11.22.33.44-55'
					name='rg'
					id='rg'
				/>
			</div>
			<div style={wrapper}>
				<label style={label} htmlFor='cpf'>
					<Icon type='id' size={13} />CPF<Errors message={errorCpf} />
				</label>
				<InputText
					style={input}
					value={cpf}
					onChange={handleCpf}
					placeholder='111.222.333-44'
					name='cpf'
					id='cpf'
				/>
			</div>
			<div style={wrapper}>
				<label style={label} htmlFor='birth'>
					<Icon type='calendar' size={13} />Nascimento<Errors message={errorBirth} />
				</label>
				<InputText
					style={input}
					value={birth}
					onChange={handleBirth}
					placeholder='01/01/1900'
					name='birth'
					id='birth'
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
					placeholder='mínimo 6 caracteres'
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
	rg: PropTypes.string.isRequired,
	setRg: PropTypes.func.isRequired,
	cpf: PropTypes.string.isRequired,
	setCpf: PropTypes.func.isRequired,
	birth: PropTypes.string.isRequired,
	setBirth: PropTypes.func.isRequired,
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