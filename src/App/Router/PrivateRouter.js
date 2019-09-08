import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'wouter'
import { Menu } from '../Menu/index'
import { MyData } from '../MyData/index'
import { Payments } from '../Payments/index'
import { NotFound } from '../NotFound/index'

export const PrivateRouter = () =>
	<Switch>
		<Route path='/'><Redirect to='/meus-dados/fisica' /></Route>
		<Route path='/home/login'><Redirect to='/meus-dados/fisica' /></Route>
		<Route path='/cadastrar/email'><Redirect to='/meus-dados/fisica' /></Route>
		<Route path='/meus-dados/:any'><Menu title='Meus Dados'><MyData /></Menu></Route>
		<Route path='/pagamentos'><Menu title='Pagamentos'><Payments /></Menu></Route>
		<Route path='/:any*'><NotFound fallback='/meus-dados/fisica' /></Route>
	</Switch>