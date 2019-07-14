import React from 'react'
import { AlertIcon } from '../../AlertIcon/index'
import { error } from './styles'

export const Errors = ({ message }) =>
	<label style={error}>
		{message && <AlertIcon size={16} />}
		&nbsp;
		{message}
	</label>