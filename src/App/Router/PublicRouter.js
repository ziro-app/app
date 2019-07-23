import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { Switch, Route, useLocation } from 'wouter'
import { Header } from '../Header/index'
import { Login } from '../Login/index'
import { Register } from '../Register/index'

export const PublicRouter = () => {
	const [location] = useLocation()
	return (
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
	)
}