import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'wouter'
import { Header } from './Header/index'
import { SlideRoute } from './SlideRoute/index'
import { RegisterCnpj } from './RegisterCnpj/index'
import { RegisterEmail } from './RegisterEmail/index'

export const Register = () => {
	const [direction, setDirection] = useState('forward')
	const [cnpj, setCnpj] = useState('')
	const [cnpjIsValid, setCnpjIsValid] = useState(false)
	const cnpjProps = { cnpj, setCnpj, cnpjIsValid, setCnpjIsValid, setDirection }
	const [email, setEmail] = useState('')
	const emailProps = { email, setEmail }
	return (
		<Header setDirection={setDirection}>
			<Switch>
				<Route path='/cadastrar/cnpj'>
					<SlideRoute path='/cadastrar/cnpj' direction={direction}>
						<RegisterCnpj {...cnpjProps} />
					</SlideRoute>
				</Route>
				<Route path='/cadastrar/dados'>
					<SlideRoute path='/cadastrar/dados' direction={direction}>
						<div>Passo 2 - Conclua seu cadastro</div>
					</SlideRoute>
				</Route>
				<Route path='/cadastrar/email'>
					<SlideRoute path='/cadastrar/email' direction={direction}>
						<RegisterEmail {...emailProps} />
					</SlideRoute>
				</Route>
				<Route path='/:any*'>
					<Redirect to='/cadastrar/cnpj' />
				</Route>
			</Switch>
		</Header>
	)
}