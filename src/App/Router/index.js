import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'wouter'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '../Header/index'
import { Login } from '../Login/index'
import { Register } from '../Register/index'
import { MyData } from '../MyData/index'
import { NotFound } from '../NotFound/index'

export const Router = ({ user, setUser, location, setLocation }) => {
	const [dragDirection, setDragDirection] = useState(0)
	const variants = {
		initial: dragDirection => ({
			x: dragDirection < 0 ? 1000 : -1000
		}),
		animate: { x: 0 },
		exit: dragDirection => ({
			x: dragDirection < 0 ? 1000 : -1000
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
	if (user) return (
		<Switch>
			<Route path='/'>
				<MyData user={user} />
			</Route>
			<Route path='/meus-dados'>
				<MyData user={user} />
			</Route>
			<Route path='/login'>
				<Redirect to='/' />
			</Route>
			<Route path='/:any*'>
				<NotFound />
			</Route>
		</Switch>
	)
	else return (
		<div>
			<Header />
			<Switch>
				<Route path='/login'>
					<AnimatePresence>
						{location === '/login' &&
							<motion.div style={{ position: 'absolute', width: '100%' }} key='one' custom={dragDirection} variants={variants} {...AnimateLogin}>
								<Login />
							</motion.div>}
					</AnimatePresence>
				</Route>
				<Route path='/cadastrar'>
					<AnimatePresence>
						{location === '/cadastrar' &&
							<motion.div style={{ position: 'absolute', width: '100%' }} key='two' custom={dragDirection} variants={variants} {...AnimateRegister}>
								<Register />
							</motion.div>}
					</AnimatePresence>					
				</Route>
			</Switch>
		</div>
	)
}

Router.propTypes = {
	user: PropTypes.object,
	setUser: PropTypes.func.isRequired,
	location: PropTypes.string.isRequired
}