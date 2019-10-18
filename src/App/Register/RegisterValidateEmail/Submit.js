import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { auth } from '../../../Firebase/index'
import { Message } from './Message'
import Spinner from '@bit/vitorbarbosa19.ziro.spinner'
import { buttonWrapper, loader, secondary, secondaryDisabled, scaleButton } from './styles'

export const Submit = () => {
	const [submitting, setSubmitting] = useState(false)
	const [message, setMessage] = useState({ content: '', type: '' })
	const submitForm = async () => {
			try {
				setSubmitting(true)
				await auth.currentUser.sendEmailVerification({ url: process.env.CONTINUE_URL })
				setSubmitting(false)
				setMessage({ content: 'Email reenviado com sucesso!', type: 'success' })
			} catch (error) {
				console.log(error)
				setSubmitting(false)
				setMessage({ content: 'Aguarde alguns instantes para reenviar', type: 'error' })
			}
	}
	return (
		<div style={buttonWrapper}>
			<motion.input
				style={submitting ? secondaryDisabled : secondary }
				type='submit'
				value='Reenviar email'
				whileTap={submitting ? null : scaleButton}
				onClick={submitForm}
			/>
			<div style={loader}>
				{submitting ? <Spinner size={'4rem'} /> : <Message message={message.content} type={message.type} />}
			</div>
		</div>
	)
}