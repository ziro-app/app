import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useLocation, Link } from 'wouter'
import TransitionTab from '@bit/vitorbarbosa19.ziro.transition-tab'
import { menu, tab, tabActive } from './styles'

export const Tabs = ({ pathOne, tabNameOne, pathTwo, tabNameTwo, children }) => {
	const [location] = useLocation()
	return (
		<Fragment>
			<div style={menu}>
				<Link style={location === pathOne ? tabActive : tab} href={pathOne}>
					{tabNameOne}
				</Link>
				<Link style={location === pathTwo ? tabActive : tab} href={pathTwo}>
					{tabNameTwo}
				</Link>
			</div>
			<TransitionTab components={[
				{ path: pathOne, children: children[0] },
				{ path: pathTwo, children: children[1] }
			]}/>
		</Fragment>
	)
}

Tabs.propTypes = {
	pathOne: PropTypes.string.isRequired,
	tabNameOne: PropTypes.string.isRequired,
	pathTwo: PropTypes.string.isRequired,
	tabNameTwo: PropTypes.string.isRequired,
	children: PropTypes.arrayOf(PropTypes.element)
}