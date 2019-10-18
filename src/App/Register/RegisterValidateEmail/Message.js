import React from 'react'
import { PropTypes } from 'prop-types'
import Icon from '@bit/vitorbarbosa19.ziro.icon'
import { successColor, alertColor } from '../../../Theme/styleVariables'
import { successMsg, errorMsg } from './styles'

export const Message = ({ message, type }) => {
	const style = type === 'success' ? successMsg : errorMsg
	const component = type === 'success' ? <Icon type='success' size={12} color={successColor} /> : <Icon type='alert' size={12} color={alerColor} />
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