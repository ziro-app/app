import React from 'react'
import PropTypes from 'prop-types'
import { grayColor1 } from '../../Theme/styleVariables'

export const EmailIcon = ({ size, color }) =>
	<svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
		<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
		<polyline points='22,6 12,13 2,6'></polyline>
	</svg>

EmailIcon.defaultProps = {
	size: 24,
	color: grayColor1
}

EmailIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string
}