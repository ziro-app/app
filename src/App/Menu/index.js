import React from 'react'
import { Header } from './Header/index'
import { Panel } from './Panel/index'

export const Menu = ({ children }) => {
	return (
		<div>
			<Header />
			<Panel />
			{children}
		</div>
	)
}