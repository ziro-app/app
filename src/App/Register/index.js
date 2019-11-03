import React, { useState, useContext } from 'react'
import { userContext } from '../appContext'
import TransitionRoute from '@bit/vitorbarbosa19.ziro.transition-route'
import { Header } from './Header/index'
import { RegisterCnpj } from './RegisterCnpj/index'
import { RegisterData } from './RegisterData/index'
import { RegisterEmail } from './RegisterEmail/index'
import { RegisterValidateEmail } from './RegisterValidateEmail/index'
import { container } from '../../Theme/styleVariables'

export const Register = () => {
	const { checkoutId } = useContext(userContext)
	// Slide animation direction
	const [forward, setForward] = useState(true)
	const goForward = () => setForward(true)
	const goBack = () => setForward(false)
	// Register business data
	const [cnpj, setCnpj] = useState('')
	const [razao, setRazao] = useState('')
	const [fantasia, setFantasia] = useState('')
	const [rua, setRua] = useState('')
	const [numero, setNumero] = useState('')
	const [complemento, setComplemento] = useState('')
	const [bairro, setBairro] = useState('')
	const [cep, setCep] = useState('')
	const [cidade, setCidade] = useState('')
	const [estado, setEstado] = useState('')
	const [pais] = useState('BR')
	const [cnpjIsValid, setCnpjIsValid] = useState(false)
	const cnpjProps = { cnpj, setCnpj, setRazao, setFantasia, setRua, setNumero, setComplemento, setBairro,
		setCep, setCidade, setEstado, cnpjIsValid, setCnpjIsValid, goForward }
	// Register data state
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [rg, setRg] = useState('')
	const [cpf, setCpf] = useState('')
	const [birth, setBirth] = useState('')
	const [country, setCountry] = useState('+55')
	const [phone, setPhone] = useState('')
	const [pass, setPass] = useState('')
	const [confirmPass, setConfirmPass] = useState('')
	const dataProps = { fname, setFname, lname, setLname, rg, setRg, cpf, setCpf, birth, setBirth,
		country, setCountry, phone, setPhone, pass, setPass, confirmPass, setConfirmPass, goForward }
	// Register email state
	const [email, setEmail] = useState('')
	const [emailIsValid, setEmailIsValid] = useState(false)
	const emailProps = { email, setEmail, emailIsValid, setEmailIsValid, cnpj, razao, fantasia, rua,
		numero, complemento, bairro, cep, cidade, estado, pais, fname, lname, rg, cpf, birth,
		country, phone, pass, confirmPass, checkoutId, goForward }
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
				  children:
				  	<Header
					  	title='Valide seu email'
					  	subtitle='Passo 3'
					  	message='Seus dados foram salvos!'
					  	backPath='/cadastrar/dados'
					  	goBack={goBack}
				  	>
				  		<RegisterEmail {...emailProps} />
				  	</Header>
				},
				{ path: '/cadastrar/validar-email',
				  children:
				  	<Header
					  	title='Verifique sua caixa'
					  	subtitle='Passo 4'
					  	message='Email de validação enviado!'
					  	backPath='/cadastrar/email'
					  	goBack={goBack}
				  	>
				  		<RegisterValidateEmail email={email} checkoutId={checkoutId} />
				  	</Header>
				}
			]}/>
		</div>
	)
}