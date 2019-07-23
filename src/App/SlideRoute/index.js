import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'wouter'
import { animatedDiv } from './styles'

export const SlideRoute = ({ to, children }) => {
	const [dragDirection, setDragDirection] = useState(0)
	const variants = {
		initial: dragDirection => ({
			x: dragDirection < 0 ? 1000 : -1000
		}),
		animate: { x: 0 },
		exit: dragDirection => ({
			x: dragDirection < 0 ? -1000 : 1000
		})
	}
	const animateSettings = {
		transition: { x: { type: 'spring', stiffness: 300, damping: 200 } },
		initial: 'initial',
		animate: 'animate',
		exit: 'exit',
		drag: 'x',
		onDragEnd: (event, { point: { x } }) => {
			setDragDirection(x)
			setLocation('/cadastrar')
		}
	}
	const [location] = useLocation()
	return (
		<AnimatePresence>
			{location === '/login' &&
				<motion.div style={animatedDiv} key='one' custom={dragDirection} variants={variants} {...animateSettings}>
					{children}
				</motion.div>}
		</AnimatePresence>
	)
}

SlideRoute.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}