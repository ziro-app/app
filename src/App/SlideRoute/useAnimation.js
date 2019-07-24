import { useState } from 'react'
import { useLocation } from 'wouter'

export const useAnimation = to => {
	const [location, setLocation] = useLocation()
	const [isDragging, setIsDragging] = useState(false)
	const [dragDirection, setDragDirection] = useState(0)
	const direction = location === '/login' ? -1000 : 1000
	const animationNoDrag = {
		transition: { x: { type: 'spring', stiffness: 300, damping: 200 } },
		initial: { x: direction },
		animate: { x: 0 },
		exit: { x: direction },
	}
	const animationDrag = {
		transition: { x: { type: 'spring', stiffness: 300, damping: 200 } },
		initial: 'initial',
		animate: 'animate',
		exit: 'exit',
		drag: 'x',
        dragConstraints: { left: 0, right: 0 },
        dragElastic: 1,
        onDragStart: () => setIsDragging(true),
		onDragEnd: (event, { offset, velocity }) => {
			if (Math.abs(offset.x * velocity.x) > 20000) {
				setDragDirection(offset.x)
				setLocation(to)
			}
		},
		variants: {
			initial: dragDirection => ({
				x: dragDirection < 0 ? -1000 : 1000
			}),
			animate: { x: 0 },
			exit: dragDirection => ({
				x: dragDirection < 0 ? -1000 : 1000
			})
		}
	}
	let animation = isDragging ? animationDrag : animationNoDrag
	return [location, dragDirection, animation]
}