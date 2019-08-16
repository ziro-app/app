import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { animation } from './animation'
import { panel, container } from './styles'

export const Panel = ({ isOpen }) =>
	<AnimatePresence initial={false}>
		{isOpen &&
			<motion.div style={panel} key={1} {...animation}>
				<div style={container}>Panel</div>
			</motion.div>}
	</AnimatePresence>

Panel.propTypes = {
	isOpen: PropTypes.bool.isRequired
}