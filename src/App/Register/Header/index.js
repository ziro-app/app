import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { BackButton } from './BackButton'
import { Logo } from '../../../Assets/Logo/index'
import { container } from './styles'

export const Header = ({ setDirection, children }) =>
	<Fragment>
		<div style={container}>
			<BackButton setDirection={setDirection} />
			<Logo />
		</div>
		{children}
	</Fragment>

Header.propTypes = {
	setDirection: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired
}