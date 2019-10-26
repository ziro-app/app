import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'wouter'
import { motion } from 'framer-motion'
import { submit, scaleButton } from './styles'

export const Reload = ({ checkoutId }) => {
	const [, setLocation] = useLocation()
	const reload = () => {
		setLocation(`/login?id=${checkoutId}`)
		window.location.reload()
	}
	return (
		<motion.input
			style={submit}
			type='submit'
			value='Já acessei o link'
			whileTap={scaleButton}
			onClick={reload}
		/>
	)
}

Reload.propTypes = {
	checkoutId: PropTypes.string
}