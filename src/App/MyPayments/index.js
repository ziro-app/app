import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../appContext'
import Timeline from '@bit/vitorbarbosa19.ziro.timeline'
import {} from './styles'

export const MyPayments = () => {
	const { payments } = useContext(userContext)
	console.log(payments)
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