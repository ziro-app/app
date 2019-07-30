import React from 'react'
import { PropTypes } from 'prop-types'
import { motion } from 'framer-motion'
// import { Errors } from './Errors'
import { Spinner } from '../../../Assets/Spinner/index'
import { buttonWrapper, loader, submit, submitDisabled, scaleButton } from './styles'

export const Submit = ({ errorSave }) =>
	<div style={buttonWrapper}>
		<div style={loader}>{''}</div>
		<motion.input
			style={submit}
			type='submit'
			value='Continuar'
			whileTap={scaleButton}
		/>
	</div>

Submit.propTypes = {
	errorSave: PropTypes.string.isRequired
}