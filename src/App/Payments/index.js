import React from 'react'
import PropTypes from 'prop-types'
import { container, transaction, transaction2, transaction3, status, status2, status3, supplier, value, date, quantity } from './styles'

export const Payments = ({ user }) =>
	<div style={container}>
		<div style={transaction}>
			<div style={status}>Em aberto</div>
			<div style={supplier}>Karmani</div>
			<div style={value}>R$ 7.238,55</div>
			<div style={date}>30/ago</div>
			<div style={quantity}>32 pçs</div>
		</div>
		<div style={transaction2}>
			<div style={status2}>Confirmado</div>
			<div style={supplier}>Cor Doce</div>
			<div style={value}>R$ 3.998,12</div>
			<div style={date}>30/ago</div>
			<div style={quantity}>23 pçs</div>
		</div>
		<div style={transaction3}>
			<div style={status3}>Concluído</div>
			<div style={supplier}>La Chocolê</div>
			<div style={value}>R$ 5.372,43</div>
			<div style={date}>27/ago</div>
			<div style={quantity}>29 pçs</div>
		</div>
	</div>

Payments.propTypes = {
	user: PropTypes.object.isRequired
}