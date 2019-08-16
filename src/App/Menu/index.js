import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Header } from './Header/index'
import { Panel } from './Panel/index'
import { container } from './styles'

export const Menu = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(true)
	return (
		<div style={container}>
			<Panel isOpen={isOpen} setIsOpen={setIsOpen} />
			<Header title={title} setIsOpen={setIsOpen} />
			{children}
		</div>
	)
}

Menu.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}