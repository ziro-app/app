import React from 'react'
import { PropTypes } from 'prop-types'
import { motion } from 'framer-motion'
import { Errors } from './Errors'
import { Spinner } from '../../Assets/Spinner/index'
import { buttonWrapper, loader, submit, submitDisabled, scaleButton, forgotPass } from './styles'

export const Submit = ({ submitting, authError }) =>
	<div style={buttonWrapper}>
		<div style={loader}>
			{submitting ? <Spinner size={'4rem'} /> : <Errors message={authError} />}
		</div>
		<motion.input
			style={submitting ? submitDisabled : submit}
			type='submit'
			value='Validar CNPJ'
			whileTap={submitting ? null : scaleButton}
		/>
	</div>

Submit.propTypes = {
	submitting: PropTypes.bool.isRequired,
	authError: PropTypes.string.isRequired
}