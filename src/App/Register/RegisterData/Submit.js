import React from 'react'
import { PropTypes } from 'prop-types'
import { motion } from 'framer-motion'
import { Errors } from './Errors'
import { buttonWrapper, loader, submit, scaleButton } from './styles'

export const Submit = ({ errorSave }) =>
	<div style={buttonWrapper}>
		<div style={loader}><Errors message={errorSave} /></div>
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