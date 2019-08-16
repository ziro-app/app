import React from 'react'
import PropTypes from 'prop-types'
import { primaryColor } from '../../Theme/styleVariables'

export const LogoutIcon = ({ size, color, strokeWidth }) =>
	<svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
		<path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
		<polyline points='16 17 21 12 16 7'></polyline>
		<line x1='21' y1='12' x2='9' y2='12'></line>
	</svg>

LogoutIcon.defaultProps = {
	size: 24,
	color: primaryColor,
	strokeWidth: 2
}

LogoutIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
	strokeWidth: PropTypes.number
}