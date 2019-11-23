import React, { useState, useEffect } from 'react'
import { db } from '../../Firebase/index'
import currencyFormat from '@ziro/currency-format'
import maskInput from '@ziro/mask-input'
import { sendToBackend } from './sendToBackend'
import capitalize from '@ziro/capitalize'
import ErrorLoading from '@bit/vitorbarbosa19.ziro.error-loading'
import Spinner from '@bit/vitorbarbosa19.ziro.spinner'
import Header from '@bit/vitorbarbosa19.ziro.header'
import Form from '@bit/vitorbarbosa19.ziro.form'
import FormInput from '@bit/vitorbarbosa19.ziro.form-input'
import Dropdown from '@bit/vitorbarbosa19.ziro.dropdown'
import InputText from '@bit/vitorbarbosa19.ziro.input-text'
import { containerWithPadding } from '../../Theme/styleVariables'

export const CreatePayment = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [seller, setSeller] = useState('')
	const [sellers, setSellers] = useState([])
	const [sellersAndIds, setSellersAndIds] = useState([])
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
	useEffect(() => {
		const fetchSellers = async () => {
			try {
				const sellersList = await db.collection('sellers').get()
				console.log(sellersList)
				if (!sellersList.empty) {
					let sellersArray = []
					let sellersAndIdsArray = []
					sellersList.forEach(sellerDoc => {
						const { name, zoopid } = sellerDoc.data()
						if (name && zoopid) {
							sellersArray.push(capitalize(name))
							sellersAndIdsArray.push([capitalize(name), zoopid])
						} else setIsError(true)
					})
					setSellers(sellersArray)
					setSellersAndIds(sellersAndIdsArray)
					setIsLoading(false)
				} else setIsError(true)
			} catch (error) {
				console.log(error)
				setIsError(true)
			}
		}
		fetchSellers()
	}, [])
	return (
		<div style={containerWithPadding}>
			{isError
				? <ErrorLoading message='Recarregue a página ou contate suporte' />
				: <>
					<Header type='title-only' title='Nova cobrança' />
					{isLoading
						? <div style={{ display: 'grid' }}><Spinner size={'6rem'} /></div>
						: <Form
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
											list={sellers}
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
					}
				  </>
			}
		</div>
	)
}