import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import EditableData from '@bit/vitorbarbosa19.ziro.editable-data'
import Badge from '@bit/vitorbarbosa19.ziro.badge'
import { db } from '../../../Firebase/db'
import { saveToDb } from './saveToDb'
import { maskInput } from '../../utils/maskInput'
import { capitalize } from '../../utils/capitalize'
import { alertColor } from '../../../Theme/styleVariables'
import { container, fetch, update } from './styles'

export const PersonData = ({ user: { uid, email } }) => {
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
	const [errorFetch, setErrorFetch] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	/*-------- FNAME --------*/
	const [fname, setFname] = useState('')
	const [errorFname, setErrorFname] = useState('')
	const updateFname = ({ target: { value } }) => setFname(capitalize(value))
	const validateFname = () => {
		if (fname.length < 3) {
			setErrorFname('mínimo 3 caracteres')
			return false
		} else {
			setErrorFname('')
			return true
		}
	}
	/*-------- LNAME --------*/
	const [lname, setLname] = useState('')
	const [errorLname, setErrorLname] = useState('')
	const updateLname = ({ target: { value } }) => setLname(capitalize(value))
	const validateLname = () => {
		if (lname.length < 3) {
			setErrorLname('mínimo 3 caracteres')
			return false
		} else {
			setErrorLname('')
			return true
		}
	}
	/*-------- RG --------*/
	const [rg, setRg] = useState('')
	const [errorRg, setErrorRg] = useState('')
	const updateRg = ({ target: { value } }) => setRg(maskInput(value, '############', true))
	const validateRg = () => {
		if (rg.length < 3) {
			setErrorRg('mínimo 5 caracteres')
			return false
		} else {
			setErrorRg('')
			return true
		}
	}
	/*-------- CPF --------*/
	const [cpf, setCpf] = useState('')
	const [errorCpf, setErrorCpf] = useState('')
	const updateCpf = ({ target: { value } }) => setCpf(maskInput(value, '###.###.###-##', true))
	const validateCpf = () => {
		if (cpf.length < 11) {
			setErrorCpf('deve ter 11 caracteres')
			return false
		} else {
			setErrorCpf('')
			return true
		}
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
				submit={saveToDb.bind(null,uid,'fname',fname)}
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
				submit={saveToDb.bind(null,uid,'lname',lname)}
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
				submit={saveToDb.bind(null,uid,'rg',rg)}
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
				submit={saveToDb.bind(null,uid,'cpf',cpf)}
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