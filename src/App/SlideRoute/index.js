import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnimation } from './useAnimation'
import { animated } from './styles'

export const SlideRoute = ({ path, to, children }) => {
	const [location, dragDirection, animationSettings] = useAnimation(to)
	return (
		<AnimatePresence>
			{location === path &&
				<motion.div style={animated} key={path} custom={dragDirection} {...animationSettings}>
					{children}
				</motion.div>}
		</AnimatePresence>
	)
}

SlideRoute.propTypes = {
	path: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}