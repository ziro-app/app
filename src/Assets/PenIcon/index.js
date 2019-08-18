import React from 'react'
import PropTypes from 'prop-types'
import { primaryColor } from '../../Theme/styleVariables'

export const PenIcon = ({ size, color }) =>
	<svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
		<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
	</svg>

PenIcon.defaultProps = {
	size: 24,
	color: primaryColor
}

PenIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string
}