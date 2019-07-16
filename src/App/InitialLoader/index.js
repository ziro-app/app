import React from 'react'
import { Spinner } from '../../Assets/Spinner/index'
import { loading } from './styles'

export const InitialLoader = () =>
	<div style={loading}>
		<Spinner />
	</div>