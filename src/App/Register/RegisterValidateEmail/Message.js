import React from 'react'
import { PropTypes } from 'prop-types'
import { SuccessIcon } from '../../../Assets/SuccessIcon/index'
import { AlertIcon } from '../../../Assets/AlertIcon/index'
import { successColor } from '../../../Theme/styleVariables'
import { successMsg, errorMsg } from './styles'

export const Message = ({ message, type }) => {
	const style = type === 'success' ? successMsg : errorMsg
	const component = type === 'success' ? <SuccessIcon size={12} color={successColor} /> : <AlertIcon size={12} />
	return (
		<label style={style}>
			{message && component}&nbsp;{message}
		</label>
	)
}

Message.propTypes = {
	message: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
}