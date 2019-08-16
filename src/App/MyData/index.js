import React from 'react'
import { db } from '../../Firebase/db'
import { container } from './styles'

export const MyData = ({ user }) => {
	console.log(user)
	return (
		<div style={container}>
			<label>Aqui você poderá ver e editar seus dados</label>
		</div>
	)
}