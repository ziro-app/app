import React from 'react'
import PropTypes from 'prop-types'
import { primaryColor } from '../../Theme/styleVariables'

export const NameIcon = ({ size, color }) =>
	<svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
		<path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
		<circle cx='12' cy='7' r='4'></circle>
	</svg>

NameIcon.defaultProps = {
	size: 24,
	color: primaryColor
}

NameIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string
}