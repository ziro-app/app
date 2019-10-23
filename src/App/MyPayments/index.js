import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../appContext'
import { db } from '../../Firebase/index'
import currencyFormat from '@ziro/currency-format'
import Timeline from '@bit/vitorbarbosa19.ziro.timeline'
import {} from './styles'

export const MyPayments = () => {
	const [payments, setPayments] = useState([])
	const { docId: buyer } = useContext(userContext)
	useEffect(() => {
		return db.collection('credit-card-payments').where('buyer','==',buyer).onSnapshot(
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
			},
			error => {
				console.log(error)
			}
		)
	}, [buyer])
	return (
		<Timeline transactions={payments} />
	)
}