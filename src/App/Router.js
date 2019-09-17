import React from 'react'
import { Switch, Route } from 'wouter'
import { Home } from './Home/index'
import { Register } from './Register/index'
import { MyData } from './MyData/index'
import { NotFound } from './NotFound/index'

export const Router = () =>
	<Switch>
		<Route path='/login'><Home /></Route>
		<Route path='/cadastrar'><Register /></Route>
		<Route path='/cadastrar/cnpj'><Register /></Route>
		<Route path='/cadastrar/dados'><Register /></Route>
		<Route path='/cadastrar/email'><Register /></Route>
		<Route path='/cadastrar/validar-email'><Register /></Route>
		<Route path='/meus-dados/fisica'><MyData /></Route>
		<Route path='/meus-dados/juridica'><MyData /></Route>
		<Route path='/:any*'><NotFound fallback='/meus-dados/fisica' /></Route>
	</Switch>