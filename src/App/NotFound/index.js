import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'wouter'
import Logo from '@bit/vitorbarbosa19.ziro.logo'
import Button from '@bit/vitorbarbosa19.ziro.button'
import { containerWithPadding } from '../../Theme/styleVariables'
import { container, title, body } from './styles'

export const NotFound = ({ fallback }) => {
	const [, setLocation] = useLocation()
	return (
		<div style={{...containerWithPadding, ...container}}>
			<Logo />
			<h1 style={title}>Página não existe</h1>
			<p style={body}>Retorne à pagina inicial para continuar navegando</p>
			<Button type='link' cta='Retornar' navigate={() => setLocation(fallback)} />
		</div>
	)
}

NotFound.propTypes = {
	fallback: PropTypes.string
}