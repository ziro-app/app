import React, { useState } from 'react'
import EditableData from '@bit/vitorbarbosa19.ziro.editable-data'
import { container } from './styles'

export const PersonData = () => {
	/*-------- FNAME --------*/
	const [fname, setFname] = useState('Vitor')
	const [errorFname, setErrorFname] = useState('')
	const updateFname = ({ target: { value } }) => setFname(value)
	const validateFname = () => {
		if (fname.length < 3) {
			setErrorFname('mínimo 3 caracteres')
			return false
		} else {
			setErrorFname('')
			return true
		}
	}
	const saveFname = () => new Promise((resolve, reject) => setTimeout(() => resolve('OK'),1000))
	/*-------- LNAME --------*/
	const [lname, setLname] = useState('Barbosa')
	const [errorLname, setErrorLname] = useState('')
	const updateLname = ({ target: { value } }) => setLname(value)
	const validateLname = () => {
		if (lname.length < 3) {
			setErrorLname('mínimo 3 caracteres')
			return false
		} else {
			setErrorLname('')
			return true
		}
	}
	const saveLname = () => new Promise((resolve, reject) => setTimeout(() => resolve('OK'),1000))
	/*-------- RG --------*/
	const [rg, setRg] = useState('')
	const [errorRg, setErrorRg] = useState('')
	const updateRg = ({ target: { value } }) => setRg(value)
	const validateRg = () => {
		if (rg.length < 3) {
			setErrorRg('mínimo 5 caracteres')
			return false
		} else {
			setErrorRg('')
			return true
		}
	}
	const saveRg = () => new Promise((resolve, reject) => setTimeout(() => resolve('OK'),1000))
	/*-------- CPF --------*/
	const [cpf, setCpf] = useState('')
	const [errorCpf, setErrorCpf] = useState('')
	const updateCpf = ({ target: { value } }) => setCpf(value)
	const validateCpf = () => {
		if (cpf.length < 12) {
			setErrorCpf('deve ter 11 caracteres')
			return false
		} else {
			setErrorCpf('')
			return true
		}
	}
	const saveCpf = () => new Promise((resolve, reject) => setTimeout(() => resolve('OK'),1000))
	return (
		<div style={container}>
			<EditableData
				name='Nome'
				value={fname}
				onChange={updateFname}
				validateInput={validateFname}
				submit={saveFname}
				setError={setErrorFname}
				error={errorFname}
			/>
			<EditableData
				name='Sobrenome'
				value={lname}
				onChange={updateLname}
				validateInput={validateLname}
				submit={saveLname}
				setError={setErrorLname}
				error={errorLname}
			/>
			<EditableData
				name='RG'
				value={rg}
				onChange={updateRg}
				validateInput={validateRg}
				submit={saveRg}
				setError={setErrorRg}
				error={errorRg}
				warning='preencha para liberar pagamentos'
				placeholder='11.22.33.44-55'
			/>
			<EditableData
				name='CPF'
				value={cpf}
				onChange={updateCpf}
				validateInput={validateCpf}
				submit={saveCpf}
				setError={setErrorCpf}
				error={errorCpf}
				warning='preencha para liberar pagamentos'
				placeholder='111.222.333-44'
			/>
			<EditableData
				name='Email'
				value={'vitorbarbosa19@gmail.com'}
				onChange={updateFname}
				validateInput={validateFname}
				submit={saveFname}
				setError={setErrorFname}
				error={errorFname}
				isValidated={true}
				editable={false}
			/>
			<EditableData
				name='Whatsapp'
				value={'+55 (11) 95177-1321'}
				onChange={updateFname}
				validateInput={validateFname}
				submit={saveFname}
				setError={setErrorFname}
				error={errorFname}
				editable={false}
			/>
		</div>
	)
}