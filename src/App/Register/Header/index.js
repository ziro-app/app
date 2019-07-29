import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { BackIcon } from '../../../Assets/BackIcon/index'
import { Logo } from '../../../Assets/Logo/index'
import { container, back } from './styles'

export const Header = ({ children }) =>
	<Fragment>
		<div style={container}>
			<div style={back}><BackIcon /></div>
			<Logo />
		</div>
		{children}
	</Fragment>

Header.propTypes = {
	children: PropTypes.element.isRequired
}