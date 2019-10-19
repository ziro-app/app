import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../appContext'
import { db } from '../../Firebase/index'
import { sendToBackend } from './sendToBackend'
import Header from '@bit/vitorbarbosa19.ziro.header'
import Checkout from '@bit/vitorbarbosa19.ziro.checkout'
import ErrorLoading from '@bit/vitorbarbosa19.ziro.error-loading'
import ErrorExpired from '@bit/vitorbarbosa19.ziro.error-expired'
import Spinner from '@bit/vitorbarbosa19.ziro.spinner'
import { containerWithPadding } from '../../Theme/styleVariables'

export const CardCheckout = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [isExpired, setIsExpired] = useState(false)
	const [charge, setCharge] = useState('')
	const [maxInstallments, setMaxInstallments] = useState('')
	const [seller, setSeller] = useState('')
	const [id, setId] = useState('')
	const { uid } = useContext(userContext)
	const checkoutProps = { charge, maxInstallments, seller }
	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const id = params.get('id')
		const fetchPaymentFromDb = async () => {
			const payment = await db.collection('credit-card-payments').doc(id).get()
			if (payment.exists) {
				const { charge, maxInstallments, seller, status } = payment.data()
				if (status === 'unpaid') {
					if (charge && maxInstallments && seller) {
						setCharge(charge)
						setMaxInstallments(maxInstallments)
						setSeller(seller)
						setId(id)
						setIsLoading(false)
					} else setIsError(true)	
				} else setIsExpired(true)
			} else setIsError(true)
		}
		fetchPaymentFromDb()
	}, [])
	if (isExpired) return <ErrorExpired />
	return (
		<div style={containerWithPadding}>
			{isError
				? <ErrorLoading />
				: <>
					<Header type='title-only' title='Pagamento' />
					{isLoading
						? <div style={{ display: 'grid' }}><Spinner size={'6rem'} /></div>
						: <Checkout {...checkoutProps} sendToBackend={sendToBackend(id, charge, seller, uid)} />
					}
				  </>
			}
		</div>
	)
}