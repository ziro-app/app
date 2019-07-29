import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'wouter'
import { motion, AnimatePresence } from 'framer-motion'
import { animation } from './animation'
import { animated } from './styles'

export const SlideRoute = ({ path, direction, children }) => {
	const [location] = useLocation()
	const animationSettings = animation(direction)
	return (
		<AnimatePresence initial={false}>
			{location === path &&
				<motion.div style={animated} key={path} {...animationSettings}>
					{children}
				</motion.div>}
		</AnimatePresence>
	)
}

SlideRoute.propTypes = {
	path: PropTypes.string.isRequired,
	direction: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}