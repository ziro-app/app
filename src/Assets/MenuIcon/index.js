import React from 'react'
import PropTypes from 'prop-types'
import { primaryColor } from '../../Theme/styleVariables'

export const MenuIcon = ({ size, color }) =>
	<svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
		<line x1='3' y1='12' x2='21' y2='12'></line>
		<line x1='3' y1='6' x2='21' y2='6'></line>
		<line x1='3' y1='18' x2='21' y2='18'></line>
	</svg>

MenuIcon.defaultProps = {
	size: 24,
	color: primaryColor
}

MenuIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string
}