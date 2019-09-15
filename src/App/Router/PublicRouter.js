import React from 'react'
import { Switch, Route, Redirect } from 'wouter'
import { Home } from '../Home/index'
import { Join } from '../Join/index'
import { Register } from '../Register/index'

export const PublicRouter = () =>
	<Switch>
		<Route path='/home/:any'><Home /></Route>
		<Route path='/cadastrar'><Join /></Route>
		<Route path='/cadastrar/:any'><Register /></Route>
		<Route path='/:any*'><Redirect to='/home/login' /></Route>
	</Switch>