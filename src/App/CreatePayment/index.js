import React, { useState } from 'react'
import currencyFormat from '@ziro/currency-format'
import maskInput from '@ziro/mask-input'
import { sendToBackend } from './sendToBackend'
import Header from '@bit/vitorbarbosa19.ziro.header'
import Form from '@bit/vitorbarbosa19.ziro.form'
import FormInput from '@bit/vitorbarbosa19.ziro.form-input'
import Dropdown from '@bit/vitorbarbosa19.ziro.dropdown'
import InputText from '@bit/vitorbarbosa19.ziro.input-text'
import { containerWithPadding } from '../../Theme/styleVariables'

export const CreatePayment = () => {
	const [seller, setSeller] = useState('')
	const [charge, setCharge] = useState('')
	const [maxInstallments, setMaxInstallments] = useState('')
	const state = { seller, charge, maxInstallments }
	const validations = [
		{
			name: 'seller',
			validation: value => !!value,
			value: seller,
			message: 'Campo obrigatório'
		},
		{
			name: 'charge',
			validation: value => value > 9 && value <= 3000000,
			value: charge,
			message: 'Deve ser entre 0,10 e 30mil'
		},
		{
			name: 'maxInstallments',
			validation: value => /^[1-6]$/g.test(value),
			value: maxInstallments,
			message: 'Deve ser entre 1 e 6'
		}
	]
	return (
		<div style={containerWithPadding}>
			<Header type='title-only' title='Nova cobrança' />
			<Form
				buttonName='Criar cobrança'
				validations={validations}
				sendToBackend={sendToBackend(state)}
				inputs={[
					<FormInput
						name='seller'
						label='Vendedor'
						input={
							<Dropdown
								value={seller}
								onChange={({ target: { value } }) => setSeller(value)}
								list={['Crisfael']}
								placeholder='Nome do fabricante'
								onChangeKeyboard={element => element ? setSeller(element.value) : null }
							/>
						}
					/>,
					<FormInput
						name='charge'
						label='Valor a cobrar'
						input={
							<InputText
								value={currencyFormat(charge)}
								onChange={({ target: { value } }) => {
									const toInteger = parseInt(value.replace(/[R$\.,]/g,''),10)
									return setCharge(maskInput(toInteger,'#######',true))
								}}
								placeholder='R$1.299,99'
							/>
						}
					/>,
					<FormInput
						name='maxInstallments'
						label='Parcelamento máximo'
						input={
							<InputText
								value={maxInstallments}
								onChange={({ target: { value } }) => setMaxInstallments(maskInput(value, '#', true))}
								placeholder='6'
							/>
						}
					/>
				]}
			/>
		</div>
	)
}