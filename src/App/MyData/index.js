import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from './Tabs/index'
import { PersonData } from './PersonData/index'
import { container } from './styles'

export const MyData = ({ user }) =>
	<div style={container}>
		<Tabs>
			<PersonData user={user} />
			<div>Pessoa Jurídica</div>
		</Tabs>
	</div>

MyData.propTypes = {
	user: PropTypes.object.isRequired
}