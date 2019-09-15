import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useLocation, Link } from 'wouter'
import { Logo } from '../../../Assets/Logo/index'
import { container, menu, tab, tabActive } from './styles'

export const Header = ({ primaryTab, secondaryTab, setDraggable, children }) => {
	const [location] = useLocation()
	return (
		<Fragment>
			<div style={container}>
				<Logo />
				<div style={menu}></div>
			</div>
		</Fragment>
	)
}

Header.propTypes = {
	primaryTab: PropTypes.string.isRequired,
	secondaryTab: PropTypes.string.isRequired,
	setDraggable: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired
}