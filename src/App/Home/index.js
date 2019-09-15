import React from 'react'
import HeaderHome from '@bit/vitorbarbosa19.ziro.header-home'
import { Login } from './Login/index'
import { container, padding } from '../../Theme/styleVariables'

export const Home = () =>
	<div style={{...container, padding: padding }}>
		<HeaderHome linkPath='/cadastrar' linkText='Sem conta? CADASTRAR' />
		<Login />
	</div>