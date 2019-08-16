import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Header } from './Header/index'
import { Panel } from './Panel/index'

export const Menu = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div>
			<Header title={title} setIsOpen={setIsOpen} />
			<Panel />
			{children}
		</div>
	)
}

Menu.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}