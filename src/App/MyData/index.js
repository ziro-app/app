import React from 'react'
import { db } from '../../Firebase/db'
import { container } from './styles'

export const MyData = ({ user }) => {
	console.log(user)
	const logout = () => db.auth().signOut()
	return (
		<div style={container}>
			<label>Olá,</label>
			<label>{user.email}</label>
			<input type='submit' value='Logout' onClick={logout} />
		</div>
	)
}