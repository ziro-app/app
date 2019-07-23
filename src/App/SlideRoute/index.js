import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'wouter'

export const SlideRoute = ({ children }) => {
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
				<motion.div style={{ position: 'absolute', width: '100%' }} key='one' custom={dragDirection} variants={variants} {...animateSettings}>
					{children}
				</motion.div>}
		</AnimatePresence>
	)
}