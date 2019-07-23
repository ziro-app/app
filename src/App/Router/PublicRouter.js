import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'wouter'
import { Header } from '../Header/index'
import { SlideRoute } from '../SlideRoute/index'
import { Login } from '../Login/index'
import { Register } from '../Register/index'

export const PublicRouter = () =>
	<Switch>
		<Route path='/login'>
			<SlideRoute>
				<Login />
			</SlideRoute>
		</Route>
		<Route path='/cadastrar'>
			<SlideRoute>
				<Register />
			</SlideRoute>
		</Route>
	</Switch>