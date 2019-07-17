import React from 'react'
import PropTypes from 'prop-types'
import { grayColor1 } from '../../Theme/styleVariables'

export const PasswordIcon = ({ size, color }) =>
	<svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
		<rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect>
		<path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
	</svg>

PasswordIcon.defaultProps = {
	size: 24,
	color: grayColor1
}

PasswordIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string
}