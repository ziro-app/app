import React from 'react'
import { Link } from 'wouter'
import { motion } from 'framer-motion'
import { ShoppingIcon } from '../../../Assets/ShoppingIcon/index'
import { TruckIcon } from '../../../Assets/TruckIcon/index'
import { CardIcon } from '../../../Assets/CardIcon/index'
import { container, welcome, subtitle, dot, benefits, call, word, color, text, submit, scaleButton } from './styles'

export const Welcome = () =>
	<div style={container}>
		<h1 style={welcome}><label style={subtitle}>Faça parte</label><label style={dot}>.</label><br/>Crie uma conta,</h1>
		<div style={benefits}>
			<p style={call}>Compre no atacado do Bom Retiro, Brás e Itaim <span style={word}><span style={color}></span>para revender</span></p>
			<li style={text}>Encontre as melhores peças para o seu público-alvo</li>
			<li style={text}>Despreocupe-se com a retirada e o despacho de mercadorias</li>
			<li style={text}>Parcele com segurança em até 6x no cartão via link ou maquininha</li>
		</div>
		<Link href='/cadastrar/cnpj'>
			<motion.input style={submit} type='submit' value='Iniciar' whileTap={scaleButton} />
		</Link>
	</div>