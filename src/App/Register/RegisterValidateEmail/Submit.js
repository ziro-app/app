import React from 'react'
import { PropTypes } from 'prop-types'
import { motion } from 'framer-motion'
import { primary, secondary, scaleButton } from './styles'

export const Submit = ({ callToAction, type }) =>
	<motion.input
		style={type === 'primary' ? primary : secondary }
		type='submit'
		value={callToAction}
		whileTap={scaleButton}
	/>

Submit.propTypes = {
	callToAction: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
}