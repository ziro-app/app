import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Logo } from '../../../Assets/Logo/index'
import { container } from './styles'

export const Header = ({ children }) =>
	<Fragment>
		<div style={container}>
			<Logo />
		</div>
		{children}
	</Fragment>

Header.propTypes = {
	children: PropTypes.element.isRequired
}