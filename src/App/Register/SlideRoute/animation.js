export const animation = ({
	transition: { x: { type: 'spring', stiffness: 600, damping: 400 } },
	initial: 'initial',
	animate: 'animate',
	exit: 'exit',
	variants: {
		initial: direction => ({
			x: direction === 'forward' ? 1000 : 1000
		}),
		animate: { x: 0 },
		exit: direction => ({
			x: direction === 'forward' ? -1000 : -1000
		})
	}
})