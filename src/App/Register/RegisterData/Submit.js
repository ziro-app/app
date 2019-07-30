import React from 'react'
import { PropTypes } from 'prop-types'
import { motion } from 'framer-motion'
import { useLocation } from 'wouter'
// import { Errors } from './Errors'
import { Spinner } from '../../../Assets/Spinner/index'
import { buttonWrapper, loader, submit, submitDisabled, scaleButton } from './styles'

export const Submit = ({ submitting, errorName, errorSubmit }) => {
	const [,setLocation] = useLocation('')
	return (
		<div style={buttonWrapper}>
			<div style={loader}>
				{submitting ? <Spinner size={'4rem'} /> : ''}
			</div>
			<motion.input
				style={submitting ? submitDisabled : submit}
				type='submit'
				value='Enviar dados'
				whileTap={submitting ? null : scaleButton}
				onClick={() => setLocation('/cadastrar/email')} // remove later
			/>
		</div>
	)
}

Submit.propTypes = {
	submitting: PropTypes.bool.isRequired,
	errorName: PropTypes.string.isRequired,
	errorSubmit: PropTypes.string.isRequired
}