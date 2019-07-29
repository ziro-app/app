import React from 'react'
import { Link } from 'wouter'
import { ShoppingIcon } from '../../Assets/ShoppingIcon/index'
import { TruckIcon } from '../../Assets/TruckIcon/index'
import { CardIcon } from '../../Assets/CardIcon/index'
import { container, welcome, subtitle, dot, wrapper, label, instructions, icon, text, cnae, submit } from './styles'

export const Welcome = () =>
	<div style={container}>
		<h1 style={welcome}><label style={subtitle}>Faça parte</label><label style={dot}>.</label><br/>Crie uma conta</h1>
		<div style={instructions}>
			<div style={wrapper}>
				<label style={label} htmlFor='cnpj'><div style={icon}><ShoppingIcon size={15} /></div><label style={cnae}>Assessoria</label></label>
				<p style={text}>Encontre as melhores peças para seu público-alvo</p>
			</div>
			<div style={wrapper}>
				<label style={label} htmlFor='cnpj'><div style={icon}><TruckIcon size={15} /></div><label style={cnae}>Logística</label></label>
				<p style={text}>Despreocupe-se com retirada e despacho de mercadorias</p>
			</div>
			<div style={wrapper}>
				<label style={label} htmlFor='cnpj'><div style={icon}><CardIcon size={15} /></div><label style={cnae}>Pagamento</label></label>
				<p style={text}>Parcele em até 6x via link seguro ou maquininha</p>
			</div>
		</div>
		<Link href=''>
			<input style={submit} type='submit' value='Iniciar' />
		</Link>
	</div>