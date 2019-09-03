import React, { useState, useRef, useReducer, Fragment } from 'react'
import EditableData from '@bit/vitorbarbosa19.ziro.editable-data'
import InputText from '@bit/vitorbarbosa19.ziro.input-text'
import { PenIcon } from '../../../Assets/PenIcon/index'
import { PendingIcon } from '../../../Assets/PendingIcon/index'
import { AlertIcon } from '../../../Assets/AlertIcon/index'
import { SuccessIcon } from '../../../Assets/SuccessIcon/index'
import { Spinner } from '../../../Assets/Spinner/index'
import { successColor } from '../../../Theme/styleVariables'
import { container, block, space, header, name, note, input, inputCss, error, pending, validated, warning, field, headerAlt, spinner, label, labelWrapper, submit } from './styles'

export const PersonData = () => {
	const [fname, setFname] = useState('Vitor')
	const [errorFname, setErrorFname] = useState('')
	const updateFname = ({ target: { value } }) => setFname(value)
	const validateFname = () => {
		if (fname.length < 3) {
			setErrorFname('pelo menos 3 caracteres')
			return false
		} else {
			setErrorFname('')
			return true
		}
	}
	const saveFname = () => new Promise((resolve, reject) => setTimeout(() => resolve('OK'),1000))
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
			<div style={field}>
				<div style={headerAlt}>
					<label style={label}>Sobrenome</label>
					<PenIcon size={13} />
				</div>
				<input style={input} value='Barbosa' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<div style={headerAlt}>
					<label style={label}>RG</label>
					<div style={labelWrapper}><PendingIcon size={9} color={'#E5CD00'} strokeWidth={3} /><label style={pending}>preencha p/ liberar pagamentos</label></div>
					<PenIcon size={13} />
				</div>
				<input style={input} placeholder='11.22.33.44-55' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<div style={headerAlt}>
					<label style={label}>CPF</label>
					<div style={labelWrapper}><PendingIcon size={9} color={'#E5CD00'} strokeWidth={3} /><label style={pending}>preencha p/ liberar pagamentos</label></div>
					<PenIcon size={13} />
				</div>
				<input style={input} placeholder='111.222.333-44' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<div style={labelWrapper}><label style={label}>Email</label><label style={validated}><SuccessIcon size={9} color={successColor} />validado</label></div>
				<input style={input} disabled={true} value='vitorbarbosa19@gmail.com' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<label style={label}>Whatsapp</label>
				<input style={input} disabled={true} value='+55 (11) 95177-1321' />
				<label>&nbsp;</label>
			</div>
			<div style={field}>
				<label style={label}>Nova Senha</label>
				<input style={input} disabled={true} value='' />
				<label>&nbsp;</label>
			</div>
		</div>
	)
}