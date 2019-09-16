import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { BackButton } from './BackButton'
import { Logo } from '../../../Assets/Logo/index'
import { container, step, title, dot } from './styles'

export const Header = ({ backPath, setForward, children }) =>
	<Fragment>
		<div style={container}>
			<BackButton backPath={backPath} setForward={setForward} />
			<h1 style={step}>
				<label style={title}>Passo 1</label>
				<label style={dot}>.</label>
				<br/>
				Valide seu CNPJ
			</h1>
		</div>
		{children}
	</Fragment>

Header.propTypes = {
	backPath: PropTypes.string.isRequired,
	setForward: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired
}