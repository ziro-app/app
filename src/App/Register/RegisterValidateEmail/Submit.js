import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { db } from '../../../Firebase/db'
import { Errors } from './Errors'
import { Spinner } from '../../../Assets/Spinner/index'
import { buttonWrapper, loader, secondary, secondaryDisabled, scaleButton } from './styles'

export const Submit = () => {
	const [submitting, setSubmitting] = useState(false)
	const [message, setMessage] = useState('')
	const submitForm = async () => {
			try {
				setSubmitting(true)
				await db.auth().currentUser.sendEmailVerification({ url: process.env.CONTINUE_URL })
				setSubmitting(false)
				setMessage('Email reenviado com sucesso!')
			} catch (error) {
				console.log(error)
				setSubmitting(false)
				setMessage('Aguarde alguns instantes para reenviar')
			}
	}
	return (
		<div style={buttonWrapper}>
			<motion.input
				style={submitting ? secondaryDisabled : secondary }
				type='submit'
				value='Reenviar Email'
				whileTap={submitting ? null : scaleButton}
				onClick={submitForm}
			/>
			<div style={loader}>
				{submitting ? <Spinner size={'4rem'} /> : <Errors message={message} />}
			</div>
		</div>
	)
}