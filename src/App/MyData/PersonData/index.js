import React, { useState } from 'react'
import EditableData from '@bit/vitorbarbosa19.ziro.editable-data'
import { container } from './styles'

export const PersonData = () => {
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
				value={''}
				onChange={updateFname}
				validateInput={validateFname}
				submit={saveFname}
				setError={setErrorFname}
				error={errorFname}
				warning='preencha para liberar pagamentos'
				placeholder='11.22.33.44-55'
			/>
			<EditableData
				name='CPF'
				value={''}
				onChange={updateFname}
				validateInput={validateFname}
				submit={saveFname}
				setError={setErrorFname}
				error={errorFname}
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