import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnimation } from './useAnimation'
import { animated } from './styles'

export const SlideRoute = ({ fromPath, toPath, children }) => {
	const [location, dragDirection, animation] = useAnimation(toPath)
	return (
		<AnimatePresence>
			{location === fromPath &&
				<motion.div style={animated} key={fromPath} custom={dragDirection} {...animation}>
					{children}
				</motion.div>}
		</AnimatePresence>
	)
}

SlideRoute.propTypes = {
	fromPath: PropTypes.string.isRequired,
	toPath: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}