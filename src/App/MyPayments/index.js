import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../appContext'
import { db } from '../../Firebase/index'
import Timeline from '@bit/vitorbarbosa19.ziro.timeline'
import {} from './styles'

export const MyPayments = () => {
	const { docId: buyer } = useContext(userContext)
	useEffect(() => {
		return db.collection('credit-card-payments').where('buyer','==',buyer).onSnapshot(
			snapshot => {
				if (!snapshot.empty) {
					let payments = []
					snapshot.forEach(doc => payments.push(doc.data()))
					console.log(payments)
				}
			}
		)
	}, [buyer])
	return (
		<Timeline transactions={[
			{
				seller: 'Karmani',
				charge: '7.238,55',
				status: 'Pago',
				date: '30/ago'
			},
			{
				seller: 'Cor Doce',
				charge: '1.223,45',
				status: 'Pago',
				date: '30/ago'
			}
		]} />
	)
}