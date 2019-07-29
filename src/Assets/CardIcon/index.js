import React from 'react'
import PropTypes from 'prop-types'
import { primaryColor } from '../../Theme/styleVariables'

export const CardIcon = ({ size, color }) =>
	<svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'>
		<rect x='1' y='4' width='22' height='16' rx='2' ry='2'></rect>
		<line x1='1' y1='10' x2='23' y2='10'></line>
	</svg>

CardIcon.defaultProps = {
	size: 24,
	color: primaryColor
}

CardIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string
}