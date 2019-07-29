import React from 'react'
import { Switch, Route, Redirect } from 'wouter'
import { Home } from '../Home/index'
import { Register } from '../Register/index'

export const PublicRouter = () =>
	<Switch>
		<Route path='/home/:any'><Home /></Route>
		<Route path='/cadastrar/:any'><Register /></Route>
		<Route path='/cadastrar'><Redirect to='/cadastrar/cnpj' /></Route>
		<Route path='/:any*'><Redirect to='/home/login' /></Route>
	</Switch>