import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useLocation, Link } from 'wouter'
import TransitionTab from '@bit/vitorbarbosa19.ziro.transition-tab'
import { container, menu, tab, tabActive } from './styles'

export const Tabs = ({ primaryTab, secondaryTab, children }) => {
	const [location] = useLocation()
	console.log(children)
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
			<TransitionTab components={[
				{ path: '/meus-dados/fisica', children: children[0] },
				{ path: '/meus-dados/juridica', children: children[1] }
			]}/>
		</Fragment>
	)
}

Tabs.propTypes = {
	primaryTab: PropTypes.string.isRequired,
	secondaryTab: PropTypes.string.isRequired,
	children: PropTypes.arrayOf(PropTypes.element)
}