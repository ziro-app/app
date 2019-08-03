import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'wouter'
import { Header } from './Header/index'
import { SlideRoute } from './SlideRoute/index'
import { RegisterCnpj } from './RegisterCnpj/index'
import { RegisterData } from './RegisterData/index'
import { RegisterEmail } from './RegisterEmail/index'
import { RegisterValidateEmail } from './RegisterValidateEmail/index'

export const Register = () => {
	// Slide animation direction
	const [direction, setDirection] = useState('forward')
	// Register cnpj state
	const [cnpj, setCnpj] = useState('')
	const [cnpjIsValid, setCnpjIsValid] = useState(false)
	const cnpjProps = { cnpj, setCnpj, cnpjIsValid, setCnpjIsValid, setDirection }
	// Register data state
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [pass, setPass] = useState('')
	const [confirmPass, setConfirmPass] = useState('')
	const dataProps = { name, setName, phone, setPhone, pass, setPass, confirmPass, setConfirmPass, setDirection }
	// Register email state
	const [email, setEmail] = useState('')
	const emailProps = { email, setEmail, cnpj, name, phone, pass, confirmPass, setDirection }
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
						<RegisterData {...dataProps} />
					</SlideRoute>
				</Route>
				<Route path='/cadastrar/email'>
					<SlideRoute path='/cadastrar/email' direction={direction}>
						<RegisterEmail {...emailProps} />
					</SlideRoute>
				</Route>
				<Route path='/cadastrar/validar-email'>
					<SlideRoute path='/cadastrar/validar-email' direction={direction}>
						<RegisterValidateEmail />
					</SlideRoute>
				</Route>
				<Route path='/:any*'>
					<Redirect to='/cadastrar/cnpj' />
				</Route>
			</Switch>
		</Header>
	)
}