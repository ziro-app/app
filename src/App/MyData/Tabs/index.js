import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useLocation, Link } from 'wouter'
import { container, menu, tab, tabActive } from './styles'

export const Tabs = ({ primaryTab, secondaryTab, children }) => {
	const [location] = useLocation()
	return (
		<Fragment>
			<div style={container}>
				<div style={menu}>
					<Link style={location !== secondaryTab ? tabActive : tab} href={primaryTab}>
						P. FÍSICA
					</Link>
					<Link style={location === secondaryTab ? tabActive : tab} href={secondaryTab}>
						P. JURÍDICA
					</Link>
				</div>
			</div>
			{children}
		</Fragment>
	)
}

Tabs.propTypes = {
	primaryTab: PropTypes.string.isRequired,
	secondaryTab: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}