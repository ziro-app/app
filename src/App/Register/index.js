import React, { useState } from 'react'
import TransitionRoute from '@bit/vitorbarbosa19.ziro.transition-route'
import { Header } from './Header/index'
import { RegisterCnpj } from './RegisterCnpj/index'
import { RegisterData } from './RegisterData/index'
import { RegisterEmail } from './RegisterEmail/index'
import { RegisterValidateEmail } from './RegisterValidateEmail/index'
import { container } from '../../Theme/styleVariables'

export const Register = () => {
	// Slide animation direction
	const [forward, setForward] = useState(true)
	const goForward = () => setForward(true)
	const goBack = () => setForward(false)
	// Register cnpj state
	const [cnpj, setCnpj] = useState('')
	const [cnpjIsValid, setCnpjIsValid] = useState(false)
	const cnpjProps = { cnpj, setCnpj, cnpjIsValid, setCnpjIsValid, goForward }
	// Register data state
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [country, setCountry] = useState('+55')
	const [phone, setPhone] = useState('')
	const [pass, setPass] = useState('')
	const [confirmPass, setConfirmPass] = useState('')
	const dataProps = { fname, setFname, lname, setLname, country, setCountry, phone, setPhone,
		pass, setPass, confirmPass, setConfirmPass, goForward }
	// Register email state
	const [email, setEmail] = useState('')
	const [emailIsValid, setEmailIsValid] = useState(false)
	const emailProps = { email, setEmail, emailIsValid, setEmailIsValid, cnpj, fname, lname, country, phone, pass, confirmPass }
	return (
		<div style={container}>
			<TransitionRoute forward={forward} components={[
				{ path: '/cadastrar/cnpj',
				  children:
				  	<Header
				  		title='Valide seu CNPJ'
				  		subtitle='Passo 1'
				  		backPath='/cadastrar'
				  		goBack={goBack}
				  	>
				  		<RegisterCnpj {...cnpjProps} />
				  	</Header>
				},
				{ path: '/cadastrar/dados',
				  children:
				  	<Header
					  	title='Preencha seus dados'
					  	subtitle='Passo 2'
					  	message='CNPJ validado com sucesso!'
					  	backPath='/cadastrar/cnpj'
					  	goBack={goBack}
				  	>
				  		<RegisterData {...dataProps} />
				  	</Header>
				},
				{ path: '/cadastrar/email',
				  children: <RegisterEmail {...emailProps} />
				},
				{ path: '/cadastrar/validar-email',
				  children: <RegisterValidateEmail />
				}
			]}/>
		</div>
	)
}