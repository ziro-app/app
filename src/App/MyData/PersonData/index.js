import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import EditableData from '@bit/vitorbarbosa19.ziro.editable-data'
import Badge from '@bit/vitorbarbosa19.ziro.badge'
import { db } from '../../../Firebase/db'
import { alertColor } from '../../../Theme/styleVariables'
import { container, fetch } from './styles'

export const PersonData = ({ user: { uid, email } }) => {
	const [errorFetch, setErrorFetch] = useState('')
	useEffect(() => db.firestore().collection('users').where('id','==',uid).onSnapshot(
		snapshot => {
			const data = snapshot.docs[0].data()
			if (data.id === uid) {
				setFname(data.fname)
				setLname(data.lname)
				setWhatsapp(data.phone)
			}
		},
		error => {
			console.log(error)
			setErrorFetch('Erro. Recarregue a página')
		}
	), [])
	/*-------- FNAME --------*/
	const [fname, setFname] = useState('')
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
	const [lname, setLname] = useState('')
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
	/*-------- WHATSAPP --------*/
	const [whatsapp, setWhatsapp] = useState('')
	return (
		<div style={container}>
			{errorFetch && <Badge style={fetch} type='alert' color={alertColor} message={errorFetch} />}
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
				value={email}
				isValidated={true}
				editable={false}
			/>
			<EditableData
				name='Whatsapp'
				value={whatsapp}
				editable={false}
			/>
		</div>
	)
}

PersonData.propTypes = {
	user: PropTypes.object.isRequired
}