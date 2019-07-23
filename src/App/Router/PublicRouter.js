import React from 'react'
import { Switch, Route } from 'wouter'
import { Header } from '../Header/index'
import { SlideRoute } from '../SlideRoute/index'
import { Login } from '../Login/index'
import { Register } from '../Register/index'

export const PublicRouter = () =>
	<Switch>
		<Route path='/login'>
			<SlideRoute path='/login' to='/cadastrar'>
				<Login />
			</SlideRoute>
		</Route>
		<Route path='/cadastrar'>
			<SlideRoute path='/cadastrar' to='/login'>
				<Register />
			</SlideRoute>
		</Route>
	</Switch>