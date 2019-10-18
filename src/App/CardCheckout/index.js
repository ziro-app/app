import React, { useState, useEffect } from 'react'
import { db } from '../../Firebase/index'
import Header from '@bit/vitorbarbosa19.ziro.header'
import Checkout from '@bit/vitorbarbosa19.ziro.checkout'
import { containerWithPadding } from '../../Theme/styleVariables'

export const CardCheckout = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [charge, setCharge] = useState('')
	const [maxInstallments, setMaxInstallments] = useState('')
	const [seller, setSeller] = useState('')
	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const id = params.get('id')
		const fetchPaymentFromDb = async () => {
			const payment = await db.collection('credit-card-payments').doc(id).get()
			if (payment.exists) {
				const { charge, maxInstallments, seller } = payment.data()
				if (charge && maxInstallments && seller) {
					setCharge(charge)
					setMaxInstallments(maxInstallments)
					setSeller(seller)
					setIsLoading(false)
				}
			}
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