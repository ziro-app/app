import React from 'react'
import PropTypes from 'prop-types'
import { primaryColor } from '../../Theme/styleVariables'

export const CnpjIcon = ({ size, color }) =>
	<svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
		<path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
		<polyline points='9 22 9 12 15 12 15 22'></polyline>
	</svg>

CnpjIcon.defaultProps = {
	size: 24,
	color: primaryColor
}

CnpjIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string
}