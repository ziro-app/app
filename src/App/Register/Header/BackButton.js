import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, Link } from 'wouter'
import { CloseIcon } from '../../../Assets/CloseIcon/index'
import { BackIcon } from '../../../Assets/BackIcon/index'
import { back, anchor } from './styles'

export const BackButton = ({ setDirection }) => {
	const [location] = useLocation()
	const routes = {
		'/cadastrar/cnpj': {
			component: <CloseIcon />,
			backLink: '/home/cadastrar'
		},
		'/cadastrar/email': {
			component: <BackIcon />,
			backLink: '/cadastrar/cnpj'
		},
		'/cadastrar/telefone': {
			component: <BackIcon />,
			backLink: '/cadastrar/email'
		},
		'/cadastrar/concluir': {
			component: <BackIcon />,
			backLink: '/cadastrar/telefone'
		}
	}
	const { backLink, component } = routes[location]
	return (
		<div style={back}>
			<Link href={backLink} onClick={() => setDirection('back')}>
				<a style={anchor}>{component}</a>
			</Link>
		</div>
	)
}

BackButton.propTypes = {
	setDirection: PropTypes.func.isRequired
}