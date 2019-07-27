import React, { useState, Fragment } from 'react'
import { Switch, Route, Redirect } from 'wouter'
import { Header } from '../Header/index'
import { SlideTab } from '../SlideTab/index'
import { SlideRoute } from '../SlideRoute/index'
import { Login } from '../Login/index'
import { Register } from '../Register/index'

export const PublicRouter = () => {
	const [draggable, setDraggable] = useState(true)
	return (
		<Switch>
			<Route path='/home/:any'>
				<Header primaryTab='/home/login' secondaryTab='/home/cadastrar' setDraggable={setDraggable}>
					<Switch>
						<Route path='/home/login'>
							<SlideTab fromPath='/home/login' toPath='/home/cadastrar' draggable={draggable} setDraggable={setDraggable}>
								<Login />
							</SlideTab>
						</Route>
						<Route path='/home/cadastrar'>
							<SlideTab fromPath='/home/cadastrar' toPath='/home/login' draggable={draggable} setDraggable={setDraggable}>
								<Register />
							</SlideTab>
						</Route>
						<Route path='/:any*'>
							<Redirect to='/home/login' />
						</Route>
					</Switch>
				</Header>
			</Route>
			<Route path='/cadastrar/:any'>
				<Switch>
					<Route path='/cadastrar/cnpj'>
						<SlideRoute path='/cadastrar/cnpj'>
							<div>Passo 1 - Valide seu CNPJ</div>
						</SlideRoute>
					</Route>
					<Route path='/cadastrar/email'>
						<SlideRoute path='/cadastrar/email'>
							<div>Passo 2 - Valide seu email</div>
						</SlideRoute>
					</Route>
					<Route path='/cadastrar/telefone'>
						<SlideRoute path='/cadastrar/telefone'>
							<div>Passo 3 - Valide seu telefone</div>
						</SlideRoute>
					</Route>
					<Route path='/cadastrar/concluir'>
						<SlideRoute path='/cadastrar/concluir'>
							<div>Passo 4 - Conclua seu cadastro</div>
						</SlideRoute>
					</Route>
					<Route path='/:any*'>
						<Redirect to='/cadastrar/cnpj' />
					</Route>
				</Switch>
			</Route>
			<Route path='/cadastrar'>
				<Redirect to='/cadastrar/cnpj' />
			</Route>
			<Route path='/:any*'>
				<Redirect to='/home/login' />
			</Route>
		</Switch>
	)
}