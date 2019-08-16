import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'wouter'
import { Menu } from '../Menu/index'
import { MyData } from '../MyData/index'
import { NotFound } from '../NotFound/index'

export const PrivateRouter = ({ user }) =>
	<Switch>
		<Route path='/home/login'><Redirect to='/meus-dados' /></Route>
		<Route path='/cadastrar/email'><Redirect to='/meus-dados' /></Route>
		<Route path='/meus-dados'><Menu title='Meus Dados' user={user}><MyData user={user} /></Menu></Route>
		<Route path='/:any*'><NotFound fallback='/meus-dados' /></Route>
	</Switch>

PrivateRouter.propTypes = {
	user: PropTypes.object
}