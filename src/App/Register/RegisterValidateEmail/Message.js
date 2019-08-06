import React from 'react'
import { PropTypes } from 'prop-types'
import { SuccessIcon } from '../../../Assets/SuccessIcon/index'
import { AlertIcon } from '../../../Assets/AlertIcon/index'
import { successColor } from '../../../Theme/styleVariables'
import { successMsg, error } from './styles'

export const Message = ({ message, type }) => {
	if (type === 'success')
		return (
			<label style={successMsg}>
				{message && <SuccessIcon size={12} color={successColor} />}
				&nbsp;
				{message}
			</label>
		)
	return (
		<label style={error}>
			{message && <AlertIcon size={12} />}
			&nbsp;
			{message}
		</label>
	)
}
	

Message.propTypes = {
	message: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
}