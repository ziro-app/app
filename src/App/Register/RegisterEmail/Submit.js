import React from 'react'
import { PropTypes } from 'prop-types'
import { motion } from 'framer-motion'
// import { Errors } from './Errors'
import { Spinner } from '../../../Assets/Spinner/index'
import { buttonWrapper, loader, submit, submitDisabled, scaleButton } from './styles'

export const Submit = ({ submitting, errorEmail, errorSubmit }) =>
	<div style={buttonWrapper}>
		<div style={loader}>
			{submitting ? <Spinner size={'4rem'} /> : ''}
		</div>
		<motion.input
			style={submitting ? submitDisabled : submit}
			type='submit'
			value='Receber email'
			whileTap={submitting ? null : scaleButton}
		/>
	</div>

Submit.propTypes = {
	submitting: PropTypes.bool.isRequired,
	errorEmail: PropTypes.string.isRequired,
	errorSubmit: PropTypes.string.isRequired
}