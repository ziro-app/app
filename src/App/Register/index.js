import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'wouter'
import TransitionRoute from '@bit/vitorbarbosa19.ziro.transition-route'
import { Header } from './Header/index'
import { SlideRoute } from './SlideRoute/index'
import { Join } from '../Join/index'
import { RegisterCnpj } from './RegisterCnpj/index'
import { RegisterData } from './RegisterData/index'
import { RegisterEmail } from './RegisterEmail/index'
import { RegisterValidateEmail } from './RegisterValidateEmail/index'

export const Register = () => {
	// Slide animation direction
	const [forward, setForward] = useState(true)
	// Register cnpj state
	const [cnpj, setCnpj] = useState('')
	const [cnpjIsValid, setCnpjIsValid] = useState(false)
	const cnpjProps = { cnpj, setCnpj, cnpjIsValid, setCnpjIsValid }
	// Register data state
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [country, setCountry] = useState('+55')
	const [phone, setPhone] = useState('')
	const [pass, setPass] = useState('')
	const [confirmPass, setConfirmPass] = useState('')
	const dataProps = { fname, setFname, lname, setLname, country, setCountry, phone, setPhone, pass, setPass, confirmPass, setConfirmPass }
	// Register email state
	const [email, setEmail] = useState('')
	const [emailIsValid, setEmailIsValid] = useState(false)
	const emailProps = { email, setEmail, emailIsValid, setEmailIsValid, cnpj, fname, lname, country, phone, pass, confirmPass }
	return (
		<TransitionRoute forward={forward} components={[
			{ path: '/cadastrar',
			  children: <Join />
			},
			{ path: '/cadastrar/cnpj',
			  children: <RegisterCnpj {...cnpjProps} />
			},
			{ path: '/cadastrar/dados',
			  children: <RegisterData {...dataProps} />
			},
			{ path: '/cadastrar/email',
			  children: <RegisterEmail {...emailProps} />
			},
			{ path: '/cadastrar/validar-email',
			  children: <RegisterValidateEmail />
			}
		]} />
	)
}