import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'wouter'
import { MyData } from '../MyData/index'
import { NotFound } from '../NotFound/index'

export const PrivateRouter = ({ user }) =>
	<Switch>
		<Route path='/home/login'><Redirect to='/meus-dados' /></Route>
		<Route path='/cadastrar/email'><Redirect to='/meus-dados' /></Route>
		<Route path='/meus-dados'><MyData user={user} /></Route>
		<Route path='/:any*'><NotFound fallback='/meus-dados' /></Route>
	</Switch>

PrivateRouter.propTypes = {
	user: PropTypes.object
}