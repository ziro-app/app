import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../appContext'
import { db } from '../../Firebase/index'
import currencyFormat from '@ziro/currency-format'
import Spinner from '@bit/vitorbarbosa19.ziro.spinner'
import ErrorLoading from '@bit/vitorbarbosa19.ziro.error-loading'
import Timeline from '@bit/vitorbarbosa19.ziro.timeline'
import { spinner } from './styles'

export const MyPayments = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [errorLoading, setErrorLoading] = useState(false)
	const [payments, setPayments] = useState([])
	const { docId: buyer } = useContext(userContext)
	useEffect(() => db.collection('credit-card-payments').where('buyer','==',buyer).onSnapshot(
		snapshot => {
			if (!snapshot.empty) {
				let payments = []
				snapshot.forEach(doc => {
					const { seller, charge, status, date } = doc.data()
					const chargeFormatted = currencyFormat(charge)
					const dateFormatted = new Date(date.seconds * 1000).toLocaleDateString('pt-br', { day: '2-digit', month: 'short' }).replace(' de ','/')
					payments.push({ seller, charge: chargeFormatted, status, date: dateFormatted  })
				})
				setPayments(payments)
			}
			if (isLoading) setIsLoading(false)
		},
		error => {
			console.log(error)
			setErrorLoading(true)
			if (isLoading) setIsLoading(false)
		}
	), [buyer])
	if (isLoading) return <div style={spinner}><Spinner size='5.5rem' /></div>
	if (errorLoading) return <ErrorLoading />
	return <Timeline transactions={payments} />
}