import React from 'react'
import CallToAction from '@bit/vitorbarbosa19.ziro.call-to-action'
import { container } from '../../Theme/styleVariables'

export const Join = () =>
	<div style={container}>
		<CallToAction
			headerText='Tem cadastro? LOGIN'
			headerLinkPath='/home'
			pillText='Faça parte'
			ctaText='Compre pra revender sem se preocupar com fornecedores, logística ou pagamento'
			btnPath='/cadastrar/cnpj'
			btnText='Começar'
		/>
	</div>