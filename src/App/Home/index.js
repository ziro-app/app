import React from 'react'
import HeaderHome from '@bit/vitorbarbosa19.ziro.header-home'
import { Login } from './Login/index'
import { containerWithPadding } from '../../Theme/styleVariables'

export const Home = () =>
	<div style={containerWithPadding}>
		<HeaderHome linkPath='/cadastrar' linkText='Sem conta? CADASTRAR' />
		<Login />
	</div>