import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { BackButton } from './BackButton'
import { Logo } from '../../../Assets/Logo/index'
import { container } from './styles'

export const Header = ({ backPath, setForward, children }) =>
	<Fragment>
		<div style={container}>
			<BackButton backPath={backPath} setForward={setForward} />
			<Logo />
		</div>
		{children}
	</Fragment>

Header.propTypes = {
	backPath: PropTypes.string.isRequired,
	setForward: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired
}