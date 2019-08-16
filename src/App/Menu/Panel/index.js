import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { Options } from './Options/index'
import { animation } from './animation'
import { panel } from './styles'

export const Panel = ({ user, isOpen, setIsOpen }) =>
	<AnimatePresence initial={false}>
		{isOpen &&
			<motion.div style={panel} key={1} {...animation}>
				<Options user={user} setIsOpen={setIsOpen} />
			</motion.div>}
	</AnimatePresence>

Panel.propTypes = {
	user: PropTypes.object.isRequired,
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired
}