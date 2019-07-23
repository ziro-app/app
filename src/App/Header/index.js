import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useLocation, Link } from 'wouter'
import { Logo } from '../../Assets/Logo/index'
import { container, menu, tab, tabActive } from './styles'

export const Header = ({ primaryTab, secondaryTab, children }) => {
	const [location] = useLocation()
	return (
		<Fragment>
			<div style={container}>
				<Logo />
				<div style={menu}>
					<Link style={location !== secondaryTab ? tabActive : tab} href={primaryTab}>
						Login
					</Link>
					<Link style={location === secondaryTab ? tabActive : tab} href={secondaryTab}>
						Cadastrar
					</Link>
				</div>
			</div>
			{children}
		</Fragment>
	)
}

Header.propTypes = {
	primaryTab: PropTypes.string.isRequired,
	secondaryTab: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}