import React from 'react'
import { Logo } from '../../Assets/Logo/index'
import { Spinner } from '../../Assets/Spinner/index'
import { loading, logo } from './styles'

export const InitialLoader = () =>
	<div style={loading}>
		<div style={logo}><Logo /></div>
		<Spinner size={'6rem'} />
	</div>