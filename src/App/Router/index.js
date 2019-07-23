import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'wouter'
import { motion, AnimatePresence } from 'framer-motion'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const Router = ({ user, setUser }) => {
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
	const AnimateLogin = {
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
	const AnimateRegister = {
		transition: { x: { type: 'spring', stiffness: 300, damping: 200 } },
		initial: 'initial',
		animate: 'animate',
		exit: 'exit',
		drag: 'x',
		onDragEnd: (event, { point: { x } }) => {
			setDragDirection(x)
			setLocation('/login')
		}
	}
	if (user) return <PrivateRouter user={user} />
	else return <PublicRouter />
}

Router.propTypes = {
	user: PropTypes.object,
	setUser: PropTypes.func.isRequired,
	location: PropTypes.string.isRequired
}