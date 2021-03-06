import React from 'react'
import PropTypes from 'prop-types'
import Badge from '@bit/vitorbarbosa19.ziro.badge'
import { BackButton } from './BackButton'
import { successColor } from '../../../Theme/styleVariables'
import { container, step, wrapper, badge, sub, dot } from './styles'

export const Header = ({ title, subtitle, message, backPath, goBack, children }) =>
	<>
		<div style={container}>
			<BackButton backPath={backPath} goBack={goBack} />
			<h1 style={step}>
				{message && <label style={wrapper}>
					<Badge
						style={badge}
						type='success'
						size={14}
						color={successColor}
						message={message}
					/>
				</label>}
				<label style={sub}>{subtitle}</label>
				<label style={dot}>.</label>
				<br/>
				{title}
			</h1>
		</div>
		{children}
	</>

Header.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	message: PropTypes.string,
	backPath: PropTypes.string.isRequired,
	goBack: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired
}