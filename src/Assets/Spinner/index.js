import React from 'react'
import PropTypes from 'prop-types'
import { svg } from './styles'
import { primaryColor, grayColor2 } from '../../Theme/styleVariables'

export const Spinner = ({ size }) =>
	<svg style={svg} width={size} height={size} viewBox='0 0 24 24' strokeWidth='3' strokeLinecap='round'>
		<circle cx='12' cy='12' r='5.5' fill='none' stroke={grayColor2}></circle>
		<circle cx='12' cy='12' r='5.5' fill='none' stroke={primaryColor} strokeDasharray='12 32'></circle>
	</svg>

Spinner.defaultProps = {
	size: '7rem'
}

Spinner.propTypes = {
	size: PropTypes.string
}