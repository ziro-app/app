import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import EditableData from '@bit/vitorbarbosa19.ziro.editable-data'
import Badge from '@bit/vitorbarbosa19.ziro.badge'
import { db } from '../../../Firebase/db'
import { alertColor } from '../../../Theme/styleVariables'
import { container, fetch, update } from './styles'

export const PersonData = ({ user: { uid, email } }) => {
	const [errorFetch, setErrorFetch] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => db.firestore().collection('users').where('id','==',uid).onSnapshot(
		snapshot => {
			const data = snapshot.docs[0].data()
			if (data && data.id === uid) {
				setFname(data.fname)
				setLname(data.lname)
				setRg(data.rg)
				setCpf(data.cpf)
				setWhatsapp(data.phone)
			}
			setIsLoading(false)
		},
		error => {
			console.log(error)
			setErrorFetch('Erro. Recarregue a página')
			setIsLoading(false)
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
	const saveFname = async () => {
		const data = await db.firestore().collection('users').where('id','==',uid).get()
		await data.docs[0].ref.update({ fname })
	}
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
	const saveLname = async () => {
		const data = await db.firestore().collection('users').where('id','==',uid).get()
		await data.docs[0].ref.update({ lname })
	}
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
	const saveRg = async () => {
		const data = await db.firestore().collection('users').where('id','==',uid).get()
		await data.docs[0].ref.update({ rg })
	}
	/*-------- CPF --------*/
	const [cpf, setCpf] = useState('')
	const [errorCpf, setErrorCpf] = useState('')
	const updateCpf = ({ target: { value } }) => setCpf(value)
	const validateCpf = () => {
		if (cpf.length < 11) {
			setErrorCpf('deve ter 11 caracteres')
			return false
		} else {
			setErrorCpf('')
			return true
		}
	}
	const saveCpf = async () => {
		const data = await db.firestore().collection('users').where('id','==',uid).get()
		await data.docs[0].ref.update({ cpf })
	}
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
				isLoading={isLoading}
				editable={!errorFetch}
			/>
			<EditableData
				name='Sobrenome'
				value={lname}
				onChange={updateLname}
				validateInput={validateLname}
				submit={saveLname}
				setError={setErrorLname}
				error={errorLname}
				isLoading={isLoading}
				editable={!errorFetch}
			/>
			<EditableData
				name='RG'
				value={rg}
				onChange={updateRg}
				validateInput={validateRg}
				submit={saveRg}
				setError={setErrorRg}
				error={errorRg}
				warning={rg === '' ? 'preencha p/ pagar pelo app' : ''}
				placeholder='11.22.33.44-55'
				isLoading={isLoading}
				editable={!errorFetch}
			/>
			<EditableData
				name='CPF'
				value={cpf}
				onChange={updateCpf}
				validateInput={validateCpf}
				submit={saveCpf}
				setError={setErrorCpf}
				error={errorCpf}
				warning={cpf === '' ? 'preencha p/ pagar pelo app' : ''}
				placeholder='111.222.333-44'
				isLoading={isLoading}
				editable={!errorFetch}
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
				isLoading={isLoading}
			/>
			<div style={update}>* Para alterar email ou whatsapp, contate assessor</div>
		</div>
	)
}

PersonData.propTypes = {
	user: PropTypes.object.isRequired
}