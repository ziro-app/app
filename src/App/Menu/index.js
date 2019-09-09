import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Drawer from '@bit/vitorbarbosa19.ziro.drawer'
import { Header } from './Header/index'
import { Panel } from './Panel/index'
import { container } from './styles'

export const Menu = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div style={container}>
			<Header title={title} setIsOpen={setIsOpen} />
			<Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
				<Panel isOpen={isOpen} setIsOpen={setIsOpen} />
			</Drawer>
			{children}
		</div>
	)
}

Menu.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}