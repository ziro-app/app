import React, { useState, useContext } from 'react'
import { userContext } from '../../appContext'
import { validateInput } from '../validateInput'
import maskInput from '@ziro/mask-input'
import { capitalize } from '../../utils/capitalize'
import InputEdit from '@bit/vitorbarbosa19.ziro.input-edit'
import Badge from '@bit/vitorbarbosa19.ziro.badge'
import { alertColor } from '../../../Theme/styleVariables'
import { container, fetch, update } from './styles'

export const BusinessData = () => {
	const { loadingData, errorFetch, saveData, isAdmin,
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
			<InputEdit
				name='Cnpj'
				value={capitalize(cnpj)}
				isLoading={loadingData}
				isValidated={!!cnpj}
				editable={false}
			/>
			<InputEdit
				name='Razão Social'
				value={capitalize(razao)}
				isLoading={loadingData}
				editable={false}
			/>
			<InputEdit
				name='Fantasia'
				value={capitalize(fantasia)}
				isLoading={loadingData}
				editable={false}
			/>
			<InputEdit
				name='Inscrição Estadual'
				value={ie}
				onChange={updateIe}
				validateInput={validateIe}
				submit={saveIe}
				setError={setErrorIe}
				error={errorIe}
				placeholder='consulte pelo Sintegra'
				isLoading={loadingData}
				editable={!isAdmin && !errorFetch}
			/>
			<InputEdit
				name='Rua'
				value={capitalize(rua)}
				isLoading={loadingData}
				editable={false}
			/>
			<InputEdit
				name='Numero'
				value={numero}
				isLoading={loadingData}
				editable={false}
			/>
			<InputEdit
				name='Complemento'
				value={capitalize(complemento)}
				isLoading={loadingData}
				editable={false}
			/>
			<InputEdit
				name='Bairro'
				value={capitalize(bairro)}
				isLoading={loadingData}
				editable={false}
			/>
			<InputEdit
				name='Cep'
				value={cep}
				isLoading={loadingData}
				editable={false}
			/>
			<InputEdit
				name='Cidade'
				value={capitalize(cidade)}
				isLoading={loadingData}
				editable={false}
			/>
			<InputEdit
				name='Estado'
				value={estado}
				isLoading={loadingData}
				editable={false}
			/>
			<div style={update}>*Para alterar CNPJ, contate assessor</div>
		</div>
	)
}