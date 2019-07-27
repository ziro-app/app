export const animation = direction => {
	const animationBack = {
		transition: { x: { type: 'spring', stiffness: 300, damping: 200 } },
		initial: { x: 1000 },
		animate: { x: 0 },
		exit: { x: 1000 }
	}
	const animationForward = {
		...animationBack,
		exit: { x: -1000 }
	}
	return direction === 'forward' ? animationForward : animationBack
}