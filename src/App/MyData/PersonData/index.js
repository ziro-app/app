import React, { useState, useContext } from 'react'
import { userContext } from '../../appContext'
import { validateInput } from '../validateInput'
import { maskInput } from '../../utils/maskInput'
import { capitalize } from '../../utils/capitalize'
import InputEdit from '@bit/vitorbarbosa19.ziro.input-edit'
import Badge from '@bit/vitorbarbosa19.ziro.badge'
import { alertColor } from '../../../Theme/styleVariables'
import { container, fetch, update } from './styles'

export const PersonData = () => {
	const { loadingData, errorFetch, fname, lname, rg, cpf, birth, email, whatsapp,
		setFname, setLname, setRg, setCpf, setBirth, setWhatsapp, saveData } = useContext(userContext)
	/*---------------- FNAME ----------------*/
	const [errorFname, setErrorFname] = useState('')
	const updateFname = ({ target: { value } }) => setFname(capitalize(value))
	const conditionFname = !fname
	const messageFname = 'preencha esse campo'
	const validateFname = validateInput.bind(null, conditionFname, messageFname, setErrorFname)
	const saveFname = saveData.bind(null, 'fname', fname)
	/*---------------- LNAME ----------------*/
	const [errorLname, setErrorLname] = useState('')
	const updateLname = ({ target: { value } }) => setLname(capitalize(value))
	const conditionLname = !lname
	const messageLname = 'preencha esse campo'
	const validateLname = validateInput.bind(null, conditionLname, messageLname, setErrorLname)
	const saveLname = saveData.bind(null, 'lname', lname)
	/*---------------- RG ----------------*/
	const [errorRg, setErrorRg] = useState('')
	const updateRg = ({ target: { value } }) => setRg(maskInput(value, '############', true))
	const conditionRg = !rg
	const messageRg = 'preencha esse campo'
	const validateRg = validateInput.bind(null, conditionRg, messageRg, setErrorRg)
	const saveRg = saveData.bind(null, 'rg', rg)
	/*---------------- CPF ----------------*/
	const [errorCpf, setErrorCpf] = useState('')
	const updateCpf = ({ target: { value } }) => setCpf(maskInput(value, '###.###.###-##', true))
	const conditionCpf = !cpf || cpf.length < 14
	const messageCpf = 'necessário 11 números'
	const validateCpf = validateInput.bind(null, conditionCpf, messageCpf, setErrorCpf)
	const saveCpf = saveData.bind(null, 'cpf', cpf)
	/*---------------- BIRTH ----------------*/
	const [errorBirth, setErrorBirth] = useState('')
	const updateBirth = ({ target: { value } }) => setBirth(maskInput(value, '##/##/####', true))
	const conditionBirth = !birth || birth.length < 10
	const messageBirth = 'necessário 8 números'
	const validateBirth = validateInput.bind(null, conditionBirth, messageBirth, setErrorBirth)
	const saveBirth = saveData.bind(null, 'birth', birth)
	return (
		<div style={container}>
			{errorFetch && <Badge style={fetch} type='alert' color={alertColor} message={errorFetch} />}
			<InputEdit
				name='Nome'
				value={fname}
				onChange={updateFname}
				validateInput={validateFname}
				submit={saveFname}
				setError={setErrorFname}
				error={errorFname}
				isLoading={loadingData}
				editable={!errorFetch}
			/>
			<InputEdit
				name='Sobrenome'
				value={lname}
				onChange={updateLname}
				validateInput={validateLname}
				submit={saveLname}
				setError={setErrorLname}
				error={errorLname}
				isLoading={loadingData}
				editable={!errorFetch}
			/>
			<InputEdit
				name='RG'
				value={rg}
				onChange={updateRg}
				validateInput={validateRg}
				submit={saveRg}
				setError={setErrorRg}
				error={errorRg}
				warning={conditionRg ? 'preencha p/ pagar pelo app' : ''}
				placeholder='11.22.33.44-55'
				isLoading={loadingData}
				editable={!errorFetch}
			/>
			<InputEdit
				name='CPF'
				value={cpf}
				onChange={updateCpf}
				validateInput={validateCpf}
				submit={saveCpf}
				setError={setErrorCpf}
				error={errorCpf}
				warning={cpf === '' ? 'preencha p/ pagar pelo app' : ''}
				placeholder='111.222.333-44'
				isLoading={loadingData}
				editable={!errorFetch}
			/>
			<InputEdit
				name='Nascimento'
				value={birth}
				onChange={updateBirth}
				validateInput={validateBirth}
				submit={saveBirth}
				setError={setErrorBirth}
				error={errorBirth}
				warning={birth === '' ? 'preencha p/ pagar pelo app' : ''}
				placeholder='01/01/1990'
				isLoading={loadingData}
				editable={!errorFetch}
			/>
			<InputEdit
				name='Email'
				value={email}
				isValidated={true}
				editable={false}
			/>
			<InputEdit
				name='Whatsapp'
				value={whatsapp}
				isLoading={loadingData}
				editable={false}
			/>
			<div style={update}>*Para alterar email ou whatsapp,<br/>contate assessor</div>
		</div>
	)
}