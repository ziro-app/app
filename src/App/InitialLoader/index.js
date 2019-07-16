import React from 'react'
import { Spinner } from '../../Spinner/index'
import { loading } from './styles'

export const InitialLoader = () =>
	<div style={loading}>
		<Spinner />
	</div>