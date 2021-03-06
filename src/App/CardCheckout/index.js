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
	const [sellerZoopId, setSellerZoopId] = useState('')
	const [id, setId] = useState('')
	const { docId, razao } = useContext(userContext)
	const checkoutProps = { charge, maxInstallments, seller }
	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const id = params.get('id')
		const fetchPaymentFromDb = async () => {
			try {
				const payment = await db.collection('credit-card-payments').doc(id).get()
				if (payment.exists) {
					const { charge, maxInstallments, seller, sellerZoopId, status } = payment.data()
					if (status === 'Aguardando Pagamento') {
						if (charge && maxInstallments && seller && sellerZoopId) {
							setCharge(charge)
							setMaxInstallments(maxInstallments)
							setSeller(seller)
							setSellerZoopId(sellerZoopId)
							setId(id)
							setIsLoading(false)
						} else setIsError(true)	
					} else setIsExpired(true)
				} else setIsError(true)
			} catch (error) {
				console.log(error)
				setIsError(true)
			}
		}
		fetchPaymentFromDb()
	}, [])
	if (isExpired) return <ErrorExpired />
	return (
		<div style={containerWithPadding}>
			{isError
				? <ErrorLoading message='Acesse o link recebido novamente. Em caso de dúvidas, contate seu assessor' />
				: <>
					<Header type='icon-link' title='Pagamento' icon='back' navigateTo='/pagamentos' />
					{isLoading
						? <div style={{ display: 'grid' }}><Spinner size={'6rem'} /></div>
						: <Checkout {...checkoutProps} sendToBackend={sendToBackend(id, charge, seller, sellerZoopId, docId, razao)} />
					}
				  </>
			}
		</div>
	)
}