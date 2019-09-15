import React from 'react'
import HeaderHome from '@bit/vitorbarbosa19.ziro.header-home'
import { Login } from './Login/index'
import { container } from '../../Theme/styleVariables'

export const Home = () => {
	return (
		<div style={container}>
			<HeaderHome linkPath='/cadastrar' linkText='Sem conta? CADASTRAR' />
			<Login />
		</div>
	)
}