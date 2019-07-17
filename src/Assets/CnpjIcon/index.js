import React from 'react'
import PropTypes from 'prop-types'
import { grayColor1 } from '../../Theme/styleVariables'

export const CnpjIcon = ({ size, color }) =>
	<svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
		<path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
		<path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
	</svg>

CnpjIcon.defaultProps = {
	size: 24,
	color: grayColor1
}

CnpjIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string
}