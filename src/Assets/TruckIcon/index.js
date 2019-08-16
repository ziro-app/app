import React from 'react'
import PropTypes from 'prop-types'
import { primaryColor } from '../../Theme/styleVariables'

export const TruckIcon = ({ size, color, strokeWidth }) =>
	<svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
		<rect x='1' y='3' width='15' height='13'></rect>
		<polygon points='16 8 20 8 23 11 23 16 16 16 16 8'></polygon>
		<circle cx='5.5' cy='18.5' r='2.5'></circle>
		<circle cx='18.5' cy='18.5' r='2.5'></circle>
	</svg>

TruckIcon.defaultProps = {
	size: 24,
	color: primaryColor,
	strokeWidth: 2
}

TruckIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
	strokeWidth: PropTypes.number
}