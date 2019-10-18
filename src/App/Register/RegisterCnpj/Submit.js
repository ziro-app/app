import React from 'react'
import { PropTypes } from 'prop-types'
import { motion } from 'framer-motion'
import { Errors } from './Errors'
import Spinner from '@bit/vitorbarbosa19.ziro.spinner'
import { buttonWrapper, loader, submit, submitDisabled, scaleButton } from './styles'

export const Submit = ({ submitting, errorCnpj, errorSubmit }) =>
	<div style={buttonWrapper}>
		<div style={loader}>
			{submitting ? <Spinner size={'4rem'} /> : <Errors message={errorCnpj || errorSubmit} />}
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
	errorCnpj: PropTypes.string.isRequired,
	errorSubmit: PropTypes.string.isRequired
}