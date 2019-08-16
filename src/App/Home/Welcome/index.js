import React from 'react'
import { Link } from 'wouter'
import { motion } from 'framer-motion'
import { ShoppingIcon } from '../../../Assets/ShoppingIcon/index'
import { TruckIcon } from '../../../Assets/TruckIcon/index'
import { CardIcon } from '../../../Assets/CardIcon/index'
import { container, welcome, subtitle, dot, benefits, wrapper, label, icon, text, submit, scaleButton } from './styles'

export const Welcome = () =>
	<div style={container}>
		<h1 style={welcome}><label style={subtitle}>Faça parte</label><label style={dot}>.</label><br/>Crie uma conta,</h1>
		<div style={benefits}>
			<p style={text}>Compre no atacado do Bom Retiro, Brás e Itaim para revender</p>
			<div style={wrapper}>
				<label style={label}><div style={icon}><ShoppingIcon size={15} strokeWidth={3} /></div>Assessoria</label>
				<p style={text}>Encontre as melhores peças para o seu público-alvo</p>
			</div>
			<div style={wrapper}>
				<label style={label}><div style={icon}><TruckIcon size={15} strokeWidth={3} /></div>Logística</label>
				<p style={text}>Despreocupe-se com a retirada e o despacho de mercadorias</p>
			</div>
			<div style={wrapper}>
				<label style={label}><div style={icon}><CardIcon size={15} strokeWidth={3} /></div>Pagamento</label>
				<p style={text}>Parcele em até 6x no cartão via link seguro ou maquininha</p>
			</div>
		</div>
		<Link href='/cadastrar/cnpj'>
			<motion.input style={submit} type='submit' value='Iniciar' whileTap={scaleButton} />
		</Link>
	</div>