import React from 'react'
import PropTypes from 'prop-types'
import CallToAction from '@bit/vitorbarbosa19.ziro.call-to-action'
import { container } from '../../Theme/styleVariables'

export const Join = ({ goForward, goBack }) =>
	<div style={container}>
		<CallToAction
			headerText='Tem cadastro? LOGIN'
			headerLinkPath='/home'
			pillText='Faça parte'
			ctaText='Compre pra revender sem se preocupar com fornecedores, logística ou pagamento'
			btnPath='/cadastrar/cnpj'
			btnClick={goForward}
			btnText='Começar'
		/>
	</div>

Join.propTypes = {
	goForward: PropTypes.func,
	goBack: PropTypes.func
}