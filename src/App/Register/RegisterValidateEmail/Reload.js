import React from 'react'
import { useLocation } from 'wouter'
import { motion } from 'framer-motion'
import { submit, scaleButton } from './styles'

export const Reload = () => {
	const [, setLocation] = useLocation()
	const reload = () => {
		setLocation(`/login?id=${123}`)
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