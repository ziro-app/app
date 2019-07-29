import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'wouter'
import { motion, AnimatePresence } from 'framer-motion'
import { animation } from './animation'
import { animated } from './styles'

export const SlideRoute = ({ path, children }) => {
	const [location] = useLocation()
	const animationSettings = animation('forward')
	return (
		<AnimatePresence>
			{location === path &&
				<motion.div style={animated} key={path} {...animationSettings}>
					{children}
				</motion.div>}
		</AnimatePresence>
	)
}

SlideRoute.propTypes = {
	path: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}