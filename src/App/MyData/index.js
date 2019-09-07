import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from './Tabs/index'
import { PersonData } from './PersonData/index'
import { container } from './styles'

export const MyData = ({ user }) =>
	<div style={container}>
		<Tabs
			pathOne='/meus-dados/fisica'
			tabNameOne='p. física'
			pathTwo='/meus-dados/juridica'
			tabNameTwo='p. jurídica'
		>
			<PersonData user={user} />
			<div>Pessoa Jurídica</div>
		</Tabs>
	</div>

MyData.propTypes = {
	user: PropTypes.object.isRequired
}