import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'wouter'
import { Header } from './Header/index'
import { SlideTab } from './SlideTab/index'
import { Login } from './Login/index'
import { Welcome } from './Welcome/index'

export const Home = () => {
	const [draggable, setDraggable] = useState(true)
	return (
		<Header primaryTab='/home/login' secondaryTab='/home/cadastrar' setDraggable={setDraggable}>
			<Switch>
				<Route path='/home/login'>
					<SlideTab fromPath='/home/login' toPath='/home/cadastrar' draggable={draggable} setDraggable={setDraggable}>
						<Login />
					</SlideTab>
				</Route>
				<Route path='/home/cadastrar'>
					<SlideTab fromPath='/home/cadastrar' toPath='/home/login' draggable={draggable} setDraggable={setDraggable}>
						<Welcome />
					</SlideTab>
				</Route>
				<Route path='/:any*'>
					<Redirect to='/home/login' />
				</Route>
			</Switch>
		</Header>
	)
}