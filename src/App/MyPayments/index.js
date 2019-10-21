import React from 'react'
import Timeline from '@bit/vitorbarbosa19.ziro.timeline'
import { container, transaction, transaction2, transaction3, circle, circle2, circle3, status, status2, status3, supplier, value, date, quantity } from './styles'

export const MyPayments = () =>
	<>
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
	</>