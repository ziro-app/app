import React from 'react'
import { PropTypes } from 'prop-types'
import { useLocation } from 'wouter'
import { motion } from 'framer-motion'
import { db } from '../../../Firebase/db'
import { primary, secondary, scaleButton } from './styles'

export const Submit = ({ callToAction, type }) => {
	const [, setLocation] = useLocation()
	const handleClick = async type => {
		if (type === 'primary') {
			setLocation('/home/login')
			window.location.reload()
		}
		else
			await db.auth().currentUser.sendEmailVerification({ url: process.env.CONTINUE_URL })
	}
	return (
		<motion.input
			style={type === 'primary' ? primary : secondary }
			type='submit'
			value={callToAction}
			whileTap={scaleButton}
			onClick={handleClick.bind(null, type)}
		/>
	)
}

Submit.propTypes = {
	callToAction: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
}