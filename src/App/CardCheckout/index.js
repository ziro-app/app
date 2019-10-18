import React, { useState, useEffect } from 'react'
import { db } from '../../Firebase/index'
import Header from '@bit/vitorbarbosa19.ziro.header'
import Checkout from '@bit/vitorbarbosa19.ziro.checkout'
import ErrorLoading from '@bit/vitorbarbosa19.ziro.error-loading'
import Spinner from '@bit/vitorbarbosa19.ziro.spinner'
import { containerWithPadding } from '../../Theme/styleVariables'

export const CardCheckout = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
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
				} else setIsError(true)
			} else setIsError(true)
		}
		fetchPaymentFromDb()
	}, [])
	return (
		<div style={containerWithPadding}>
			{isError
				? <ErrorLoading />
				: <>
					<Header type='title-only' title='Pagamento' />
					{isLoading
						? <div style={{ display: 'grid' }}><Spinner size={'6rem'} /></div>
						: <Checkout charge={charge} maxInstallments={maxInstallments} seller={seller} />
					}
				  </>
			}
		</div>
	)
}