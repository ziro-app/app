import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { BackButton } from './BackButton'
import { Logo } from '../../../Assets/Logo/index'
import { container } from './styles'

export const Header = ({ children }) =>
	<Fragment>
		<div style={container}>
			<BackButton />
			<Logo />
		</div>
		{children}
	</Fragment>

Header.propTypes = {
	children: PropTypes.element.isRequired
}