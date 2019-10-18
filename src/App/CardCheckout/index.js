import React, { useEffect } from 'react'
import Header from '@bit/vitorbarbosa19.ziro.header'
import Checkout from '@bit/vitorbarbosa19.ziro.checkout'
import { containerWithPadding } from '../../Theme/styleVariables'

export const CardCheckout = () => {
	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const id = params.get('id')
		console.log(id)		
	}, [])
	return (
		<div style={containerWithPadding}>
			<Header type='title-only' title='Pagamento' />
			<Checkout charge='60078' maxInstallments='6' seller='Crisfael' />
		</div>
	)
}