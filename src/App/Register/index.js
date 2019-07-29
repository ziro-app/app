import React from 'react'
import { Switch, Route, Redirect } from 'wouter'
import { SlideRoute } from './SlideRoute/index'
import { RegisterCnpj } from './RegisterCnpj/index'

export const Register = () =>
	<Switch>
		<Route path='/cadastrar/cnpj'>
			<SlideRoute path='/cadastrar/cnpj'>
				<RegisterCnpj />
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