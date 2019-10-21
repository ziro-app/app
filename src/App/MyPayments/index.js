import React from 'react'
import Timeline from '@bit/vitorbarbosa19.ziro.timeline'
import {} from './styles'

export const MyPayments = () => {
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