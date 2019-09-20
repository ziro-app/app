import React, { useState, useContext } from 'react'
import { userContext } from '../../appContext'
import { validateInput } from '../validateInput'
import { maskInput } from '../../utils/maskInput'
import { capitalize } from '../../utils/capitalize'
import EditableData from '@bit/vitorbarbosa19.ziro.editable-data'
import Badge from '@bit/vitorbarbosa19.ziro.badge'
import { alertColor } from '../../../Theme/styleVariables'
import { container, fetch, update } from './styles'

export const BusinessData = () => {
	const { loadingData, errorFetch, saveData,
		cnpj, razao, fantasia, rua, numero, complemento, bairro, cep, cidade, estado, pais, ie,
		setCnpj, setRazao, setFantasia, setRua, setNumero, setComplemento, setBairro, setCep, setCidade, setEstado, setPais, setIe
	} = useContext(userContext)
	/*---------------- IE ----------------*/
	const [errorIe, setErrorIe] = useState('')
	const updateIe = ({ target: { value } }) => setIe(maskInput(value, '#############', true))
	const conditionIe = !ie
	const messageIe = 'preencha esse campo'
	const validateIe = validateInput.bind(null, conditionIe, messageIe, setErrorIe)
	const saveIe = saveData.bind(null, 'ie', ie)
	return (
		<div style={container}>
			{errorFetch && <Badge style={fetch} type='alert' color={alertColor} message={errorFetch} />}
			<EditableData
				name='Cnpj'
				value={capitalize(cnpj)}
				isLoading={loadingData}
				isValidated={!!cnpj}
				editable={false}
			/>
			<EditableData
				name='Razão Social'
				value={capitalize(razao)}
				isLoading={loadingData}
				editable={false}
			/>
			<EditableData
				name='Fantasia'
				value={capitalize(fantasia)}
				isLoading={loadingData}
				editable={false}
			/>
			<EditableData
				name='Inscrição Estadual'
				value={ie}
				onChange={updateIe}
				validateInput={validateIe}
				submit={saveIe}
				setError={setErrorIe}
				error={errorIe}
				isLoading={loadingData}
				editable={!errorFetch}
			/>
			<EditableData
				name='Rua'
				value={capitalize(rua)}
				isLoading={loadingData}
				editable={false}
			/>
			<EditableData
				name='Numero'
				value={numero}
				isLoading={loadingData}
				editable={false}
			/>
			<EditableData
				name='Complemento'
				value={capitalize(complemento)}
				isLoading={loadingData}
				editable={false}
			/>
			<EditableData
				name='Bairro'
				value={capitalize(bairro)}
				isLoading={loadingData}
				editable={false}
			/>
			<EditableData
				name='Cep'
				value={cep}
				isLoading={loadingData}
				editable={false}
			/>
			<EditableData
				name='Cidade'
				value={capitalize(cidade)}
				isLoading={loadingData}
				editable={false}
			/>
			<EditableData
				name='Estado'
				value={estado}
				isLoading={loadingData}
				editable={false}
			/>
			<div style={update}>*Para alterar CNPJ, contate assessor</div>
		</div>
	)
}