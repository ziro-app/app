import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../appContext'
import { db } from '../../Firebase/index'
import Timeline from '@bit/vitorbarbosa19.ziro.timeline'
import {} from './styles'

export const MyPayments = () => {
	const { docId } = useContext(userContext)
	useEffect(() => {
		return db.collection('credit-card-payments').where('buyer','==',docId).onSnapshot(
			snapshot => {
				console.log(docId)
				console.log(snapshot)
			}
		)
	}, [docId])
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