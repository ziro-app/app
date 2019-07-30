import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnimation } from './useAnimation'
import { animated } from './styles'

export const SlideTab = ({ fromPath, toPath, draggable, setDraggable, children }) => {
	const [location, dragDirection, animation] = useAnimation(toPath, draggable, setDraggable)
	return (
		<AnimatePresence initial={false}>
			{location === fromPath &&
				<motion.div style={animated} key={fromPath} custom={dragDirection} {...animation}>
					{children}
				</motion.div>}
		</AnimatePresence>
	)
}

SlideTab.propTypes = {
	fromPath: PropTypes.string.isRequired,
	toPath: PropTypes.string.isRequired,
	draggable: PropTypes.bool.isRequired,
	setDraggable: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired
}