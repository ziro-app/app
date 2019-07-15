import React from 'react'
import { PropTypes } from 'prop-types'
import { AlertIcon } from '../../AlertIcon/index'
import { error } from './styles'

export const Errors = ({ message }) =>
	<label style={error}>
		{message && <AlertIcon size={16} />}
		&nbsp;
		{message}
	</label>

Errors.propTypes = {
	message: PropTypes.string.isRequired
}