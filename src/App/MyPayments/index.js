import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../appContext'
import { db } from '../../Firebase/index'
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
					snapshot.forEach(doc => payments.push(doc.data()))
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