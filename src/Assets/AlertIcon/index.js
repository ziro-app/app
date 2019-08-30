import React from 'react'
import PropTypes from 'prop-types'
import { alertColor } from '../../Theme/styleVariables'

export const AlertIcon = ({ size, color, strokeWidth }) =>
	<svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
		<circle cx='12' cy='12' r='10'></circle>
		<line x1='12' y1='8' x2='12' y2='12'></line>
		<line x1='12' y1='16' x2='12' y2='16'></line>
	</svg>

AlertIcon.defaultProps = {
	size: 24,
	color: alertColor,
	strokeWidth: 2
}

AlertIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
	strokeWidth: PropTypes.number
}