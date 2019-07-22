import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'wouter'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '../Header/index'
import { Login } from '../Login/index'
import { Register } from '../Register/index'
import { MyData } from '../MyData/index'
import { NotFound } from '../NotFound/index'

const AnimateLogin = {
	transition: { ease: 'easeInOut', duration: 0.25 },
	initial: { x: -200 },
	animate: { x: 0 },
	exit: { x: -400 }
}
const AnimateRegister = {
	transition: { ease: 'easeInOut', duration: 0.25 },
	initial: { x: 200 },
	animate: { x: 0 },
	exit: { x: 400 }
}

export const Router = ({ user, setUser, location }) => {
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