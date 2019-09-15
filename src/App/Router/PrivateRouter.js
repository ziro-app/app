import React from 'react'
import { Switch, Route, Redirect } from 'wouter'
import { MyData } from '../MyData/index'
import { NotFound } from '../NotFound/index'

export const PrivateRouter = () =>
	<Switch>
		<Route path='/'><Redirect to='/meus-dados/fisica' /></Route>
		<Route path='/login'><Redirect to='/meus-dados/fisica' /></Route>
		<Route path='/cadastrar/email'><Redirect to='/meus-dados/fisica' /></Route>
		<Route path='/meus-dados/:any'><MyData /></Route>
		<Route path='/:any*'><NotFound fallback='/meus-dados/fisica' /></Route>
	</Switch>