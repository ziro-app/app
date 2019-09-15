import React from 'react'
import { Switch, Route, Redirect } from 'wouter'
import { Home } from '../Home/index'
import { Register } from '../Register/index'

export const PublicRouter = () =>
	<Switch>
		<Route path='/login'><Home /></Route>
		<Route path='/cadastrar'><Register /></Route>
		<Route path='/cadastrar/:any'><Register /></Route>
		<Route path='/:any*'><Redirect to='/login' /></Route>
	</Switch>