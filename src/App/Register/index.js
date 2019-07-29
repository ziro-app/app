import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'wouter'
import { Header } from './Header/index'
import { SlideRoute } from './SlideRoute/index'
import { RegisterCnpj } from './RegisterCnpj/index'

export const Register = () => {
	const [direction, setDirection] = useState('forward')
	const [cnpj, setCnpj] = useState('')
	const [cnpjIsValid, setCnpjIsValid] = useState(false)
	const cnpjProps = { cnpj, setCnpj, cnpjIsValid, setCnpjIsValid, setDirection }
	return (
		<Header>
			<Switch>
				<Route path='/cadastrar/cnpj'>
					<SlideRoute path='/cadastrar/cnpj' direction={direction}>
						<RegisterCnpj {...cnpjProps} />
					</SlideRoute>
				</Route>
				<Route path='/cadastrar/email'>
					<SlideRoute path='/cadastrar/email' direction={direction}>
						<div>Passo 2 - Valide seu email</div>
					</SlideRoute>
				</Route>
				<Route path='/cadastrar/telefone'>
					<SlideRoute path='/cadastrar/telefone' direction={direction}>
						<div>Passo 3 - Valide seu telefone</div>
					</SlideRoute>
				</Route>
				<Route path='/cadastrar/concluir'>
					<SlideRoute path='/cadastrar/concluir' direction={direction}>
						<div>Passo 4 - Conclua seu cadastro</div>
					</SlideRoute>
				</Route>
				<Route path='/:any*'>
					<Redirect to='/cadastrar/cnpj' />
				</Route>
			</Switch>
		</Header>
	)
}