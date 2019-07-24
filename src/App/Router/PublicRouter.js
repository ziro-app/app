import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'wouter'
import { Header } from '../Header/index'
import { SlideRoute } from '../SlideRoute/index'
import { Login } from '../Login/index'
import { Register } from '../Register/index'

export const PublicRouter = () => {
	const [draggable, setDraggable] = useState(true)
	return (
		<Header primaryTab='/login' secondaryTab='/cadastrar' setDraggable={setDraggable}>
			<Switch>
				<Route path='/login'>
					<SlideRoute fromPath='/login' toPath='/cadastrar' draggable={draggable} setDraggable={setDraggable}>
						<Login />
					</SlideRoute>
				</Route>
				<Route path='/cadastrar'>
					<SlideRoute fromPath='/cadastrar' toPath='/login'  draggable={draggable} setDraggable={setDraggable}>
						<Register />
					</SlideRoute>
				</Route>
				<Route path='/:any*'>
					<Redirect to='/login' />
				</Route>
			</Switch>
		</Header>
	)
}