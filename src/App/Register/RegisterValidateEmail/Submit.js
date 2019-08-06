import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { db } from '../../../Firebase/db'
import { Errors } from './Errors'
import { Spinner } from '../../../Assets/Spinner/index'
import { buttonWrapper, loader, submit, submitDisabled, scaleButton } from './styles'

export const Submit = () => {
	const [submitting, setSubmitting] = useState(false)
	const [error, setError] = useState('')
	const submitForm = async () => {
			try {
				setSubmitting(true)
				await db.auth().currentUser.sendEmailVerification({ url: process.env.CONTINUE_URL })
				setSubmitting(false)
			} catch (error) {
				console.log(error)
				setSubmitting(false)
				setError('Aguarde alguns instantes para reenviar')
			}
	}
	return (
		<div style={buttonWrapper}>
			<motion.input
				style={submitting ? submitDisabled : submit }
				type='submit'
				value='Reenviar Email'
				whileTap={submitting ? null : scaleButton}
				onClick={submitForm}
			/>
			<div style={loader}>
				{submitting ? <Spinner size={'4rem'} /> : <Errors message={error} />}
			</div>
		</div>
	)
}