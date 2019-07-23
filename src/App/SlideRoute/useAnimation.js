import { useState } from 'react'
import { useLocation } from 'wouter'

export const useAnimation = to => {
	const [location, setLocation] = useLocation()
	const [dragDirection, setDragDirection] = useState(0)
	const animationSettings = {
		transition: { x: { type: 'spring', stiffness: 300, damping: 200 } },
		initial: 'initial',
		animate: 'animate',
		exit: 'exit',
		drag: 'x',
		onDragEnd: (event, { point: { x } }) => {
			setDragDirection(x)
			setLocation(to)
		},
		variants: {
			initial: dragDirection => ({
				x: dragDirection < 0 ? 1000 : -1000
			}),
			animate: { x: 0 },
			exit: dragDirection => ({
				x: dragDirection < 0 ? -1000 : 1000
			})
		}
	}
	return [location, dragDirection, animationSettings]
}