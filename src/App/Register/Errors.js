import React from 'react'
import { PropTypes } from 'prop-types'
import { AlertIcon } from '../../Assets/AlertIcon/index'
import { error } from './styles'

export const Errors = ({ message }) =>
	<label style={error}>
		{message && <AlertIcon size={13} />}
		&nbsp;
		{message}
	</label>

Errors.propTypes = {
	message: PropTypes.string.isRequired
}