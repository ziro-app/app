import React, { useState, useEffect } from 'react'
import { db } from '../../Firebase/index'
import Header from '@bit/vitorbarbosa19.ziro.header'
import Checkout from '@bit/vitorbarbosa19.ziro.checkout'
import { containerWithPadding } from '../../Theme/styleVariables'

export const CardCheckout = () => {
	const [charge, setCharge] = useState('')
	const [maxInstallments, setMaxInstallments] = useState('')
	const [seller, setSeller] = useState('')
	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const id = params.get('id')
		const fetchPaymentFromDb = async () => {
			const payment = await db.collection('credit-card-payments').doc(id).get()
			const { charge, maxInstallments, seller } = payment.data()
			setCharge(charge)
			setMaxInstallments(maxInstallments)
			setSeller(seller)
		}
		fetchPaymentFromDb()
	}, [])
	return (
		<div style={containerWithPadding}>
			<Header type='title-only' title='Pagamento' />
			<Checkout charge={charge} maxInstallments={maxInstallments} seller={seller} />
		</div>
	)
}