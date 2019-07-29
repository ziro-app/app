import { useState } from 'react'
import { useLocation } from 'wouter'

export const useAnimation = (to, draggable, setDraggable) => {
	const [location, setLocation] = useLocation()
	const [dragDirection, setDragDirection] = useState(0)
	const animationNoDrag = {
		transition: { x: { type: 'spring', stiffness: 300, damping: 200 } },
		initial: { x: -1000 },
		animate: { x: 0 },
		exit: { x: 1000 },
		drag: 'x',
		onDrag: () => setDraggable(true)
	}
	const animationDrag = {
		transition: { x: { type: 'spring', stiffness: 300, damping: 200 } },
		initial: 'initial',
		animate: 'animate',
		exit: 'exit',
		drag: 'x',
		dragConstraints: { left: 0, right: 0 },
		dragElastic: 1,
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
	if (draggable)
		return [location, dragDirection, animationDrag]
	return [location, dragDirection, animationNoDrag]
}