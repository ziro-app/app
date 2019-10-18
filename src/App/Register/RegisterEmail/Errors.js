import React from 'react'
import { PropTypes } from 'prop-types'
import Icon from '@bit/vitorbarbosa19.ziro.icon'
import { alertColor } from '../../../Theme/styleVariables'
import { error } from './styles'

export const Errors = ({ message }) =>
	<label style={error}>
		{message && <Icon type='alert' color={alertColor} size={12} />}
		&nbsp;
		{message}
	</label>

Errors.propTypes = {
	message: PropTypes.string.isRequired
}