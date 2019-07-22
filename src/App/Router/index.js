import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'wouter'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '../Header/index'
import { Login } from '../Login/index'
import { Register } from '../Register/index'
import { MyData } from '../MyData/index'
import { NotFound } from '../NotFound/index'

export const Router = ({ user, setUser, location, setLocation }) => {
	const AnimateLogin = {
		transition: { x: { type: 'spring', stiffness: 300, damping: 200 } },
		initial: { x: -1000 },
		animate: { x: 0 },
		exit: { x: -1000 },
		drag: 'x',
		onDragEnd: (event, { point: { x } }) => {
			console.log(x)
			setLocation('/cadastrar')
		}
	}
	const AnimateRegister = {
		transition: { x: { type: 'spring', stiffness: 300, damping: 200 } },
		initial: { x: 1000 },
		animate: { x: 0 },
		exit: { x: 1000 },
		drag: 'x',
		onDragEnd: (event, { point: { x } }) => {
			console.log(x)
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
							<motion.div style={{ position: 'absolute', width: '100%' }} key='one' {...AnimateLogin}>
								<Login />
							</motion.div>}
					</AnimatePresence>
				</Route>
				<Route path='/cadastrar'>
					<AnimatePresence>
						{location === '/cadastrar' &&
							<motion.div style={{ position: 'absolute', width: '100%' }} key='two' {...AnimateRegister}>
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