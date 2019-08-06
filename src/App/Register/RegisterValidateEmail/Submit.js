import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { useLocation } from 'wouter'
import { motion } from 'framer-motion'
import { db } from '../../../Firebase/db'
import { Errors } from './Errors'
import { Spinner } from '../../../Assets/Spinner/index'
import { buttonWrapper, loader, primary, secondary, scaleButton } from './styles'

export const Submit = ({ callToAction, type }) => {
	const [submitting, setSubmitting] = useState(false)
	const [, setLocation] = useLocation()
	const handleClick = async type => {
		if (type === 'primary') {
			setLocation('/home/login')
			window.location.reload()
		}
		else {
			setSubmitting(true)
			await db.auth().currentUser.sendEmailVerification({ url: process.env.CONTINUE_URL })
			setSubmitting(false)
		}
	}
	return (
		<div style={buttonWrapper}>
			<div style={loader}>
				{submitting ? <Spinner size={'4rem'} /> : <Errors message={errorEmail || errorSubmit} />}
			</div>
			<motion.input
				style={type === 'primary' ? primary : secondary }
				type='submit'
				value={callToAction}
				whileTap={submitting ? null : scaleButton}
				onClick={handleClick.bind(null, type)}
			/>
		</div>
	)
}

Submit.propTypes = {
	callToAction: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
}