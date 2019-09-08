import React, { useState, useContext } from 'react'
import EditableData from '@bit/vitorbarbosa19.ziro.editable-data'
import Badge from '@bit/vitorbarbosa19.ziro.badge'
import { userContext } from '../../appContext'
import { saveToDb } from './saveToDb'
import { validateInput } from './validateInput'
import { maskInput } from '../../utils/maskInput'
import { capitalize } from '../../utils/capitalize'
import { alertColor } from '../../../Theme/styleVariables'
import { container, fetch, update } from './styles'

export const PersonData = () => {
	const [errorFetch, setErrorFetch] = useState('')
	const { fname, lname, rg, cpf, whatsapp, setFname, setLname, setRg, setCpf, setWhatsapp } = useContext(userContext)
	/*---------------- FNAME ----------------*/
	const [errorFname, setErrorFname] = useState('')
	const updateFname = ({ target: { value } }) => setFname(capitalize(value))
	const conditionFname = fname === ''
	const messageFname = 'preencha esse campo'
	const validateFname = validateInput.bind(null, conditionFname, messageFname, setErrorFname)
	const saveFname = saveToDb.bind(null, uid, 'fname', fname)
	/*---------------- LNAME ----------------*/
	const [errorLname, setErrorLname] = useState('')
	const updateLname = ({ target: { value } }) => setLname(capitalize(value))
	const conditionLname = lname === ''
	const messageLname = 'preencha esse campo'
	const validateLname = validateInput.bind(null, conditionLname, messageLname, setErrorLname)
	const saveLname = saveToDb.bind(null, uid, 'lname', lname)
	/*---------------- RG ----------------*/
	const [errorRg, setErrorRg] = useState('')
	const updateRg = ({ target: { value } }) => setRg(maskInput(value, '############', true))
	const conditionRg = rg === ''
	const messageRg = 'preencha esse campo'
	const validateRg = validateInput.bind(null, conditionRg, messageRg, setErrorRg)
	const saveRg = saveToDb.bind(null, uid, 'rg', rg)
	/*---------------- CPF ----------------*/
	const [errorCpf, setErrorCpf] = useState('')
	const updateCpf = ({ target: { value } }) => setCpf(maskInput(value, '###.###.###-##', true))
	const conditionCpf = cpf && cpf.length < 14
	const messageCpf = 'mínimo 11 caracteres'
	const validateCpf = validateInput.bind(null, conditionCpf, messageCpf, setErrorCpf)
	const saveCpf = saveToDb.bind(null, uid, 'cpf', cpf)
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
				warning={conditionRg ? 'preencha p/ pagar pelo app' : ''}
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
			<div style={update}>*Para alterar email ou whatsapp,<br/>contate assessor</div>
		</div>
	)
}