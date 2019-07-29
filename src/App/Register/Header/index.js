import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'wouter'
import { CloseIcon } from '../../../Assets/CloseIcon/index'
import { BackIcon } from '../../../Assets/BackIcon/index'
import { Logo } from '../../../Assets/Logo/index'
import { container, back } from './styles'

export const Header = ({ children }) => {
	const [location] = useLocation()
	return (
		<Fragment>
			<div style={container}>
				<div style={back}>
					{location === '/cadastrar/cnpj' ? <CloseIcon /> : <BackIcon />}
				</div>
				<Logo />
			</div>
			{children}
		</Fragment>
	)
}

Header.propTypes = {
	children: PropTypes.element.isRequired
}