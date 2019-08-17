import React from 'react'
import PropTypes from 'prop-types'
import { db } from '../../Firebase/db'
import { Tabs } from './Tabs/index'
import { container } from './styles'

export const MyData = ({ user }) => {
	console.log(user)
	return (
		<div style={container}>
			<Tabs />
		</div>
	)
}

MyData.propTypes = {
	user: PropTypes.object.isRequired
}