import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'wouter'
import { Header } from '../Header/index'
import { SlideTab } from '../SlideTab/index'
import { SlideRoute } from '../SlideRoute/index'
import { Login } from '../Login/index'
import { Register } from '../Register/index'

export const PublicRouter = () => {
	const [draggable, setDraggable] = useState(true)
	return (
		<Header primaryTab='/login' secondaryTab='/cadastrar' setDraggable={setDraggable}>
			<Switch>
				<Route path='/login'>
					<SlideTab fromPath='/login' toPath='/cadastrar' draggable={draggable} setDraggable={setDraggable}>
						<Login />
					</SlideTab>
				</Route>
				<Route path='/cadastrar'>
					<SlideTab fromPath='/cadastrar' toPath='/login' draggable={draggable} setDraggable={setDraggable}>
						<Register />
					</SlideTab>
				</Route>
				<Route path='/email'>
					<SlideRoute back='/cadastrar' path='/email' forward='/finalizar'>
						<div>Passo 2 - Valide seu email</div>
					</SlideRoute>
				</Route>
				<Route path='/:any*'>
					<Redirect to='/login' />
				</Route>
			</Switch>
		</Header>
	)
}