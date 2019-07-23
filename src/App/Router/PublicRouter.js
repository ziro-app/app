import React from 'react'
import { Switch, Route, Redirect } from 'wouter'
import { Header } from '../Header/index'
import { SlideRoute } from '../SlideRoute/index'
import { Login } from '../Login/index'
import { Register } from '../Register/index'

export const PublicRouter = () =>	
	<Header primaryTab='/login' secondaryTab='/cadastrar'>
		<Switch>
			<Route path='/login'>
				<SlideRoute fromPath='/login' toPath='/cadastrar'>
					<Login />
				</SlideRoute>
			</Route>
			<Route path='/cadastrar'>
				<SlideRoute fromPath='/cadastrar' toPath='/login'>
					<Register />
				</SlideRoute>
			</Route>
			<Route path='/:any*'>
				<Redirect to='/login' />
			</Route>
		</Switch>
	</Header>