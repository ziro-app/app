import React from 'react'
import Logo from '@bit/vitorbarbosa19.ziro.logo'
import Spinner from '@bit/vitorbarbosa19.ziro.spinner'
import { containerWithPadding } from '../../Theme/styleVariables'
import { container } from './styles'

export const InitialLoader = () =>
	<div style={{...containerWithPadding, ...container}}>
		<Logo />
		<Spinner size={'6rem'} />
	</div>