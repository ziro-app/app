import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { Options } from './Options/index'
import { animation } from './animation'
import { panel } from './styles'

export const Panel = ({ isOpen, setIsOpen }) =>
	<AnimatePresence initial={false}>
		{isOpen &&
			<motion.div style={panel} key={1} {...animation}>
				<Options setIsOpen={setIsOpen} />
			</motion.div>}
	</AnimatePresence>

Panel.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired
}