import React from 'react'
import PropTypes from 'prop-types'
import { Header } from './Header/index'
import { Panel } from './Panel/index'

export const Menu = ({ title, children }) =>
	<div>
		<Header title={title} />
		<Panel />
		{children}
	</div>

Menu.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}