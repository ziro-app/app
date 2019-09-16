import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { BackButton } from './BackButton'
import { container, step, sub, dot } from './styles'

export const Header = ({ title, subtitle, backPath, goBack, children }) =>
	<Fragment>
		<div style={container}>
			<BackButton backPath={backPath} goBack={goBack} />
			<h1 style={step}>
				<label style={sub}>{subtitle}</label>
				<label style={dot}>.</label>
				<br/>
				{title}
			</h1>
		</div>
		{children}
	</Fragment>

Header.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	backPath: PropTypes.string.isRequired,
	goBack: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired
}