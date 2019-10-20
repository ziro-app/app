import React from 'react'
import { Menu } from '../Menu/index'
import { Tabs } from './Tabs/index'
import { PersonData } from './PersonData/index'
import { BusinessData } from './BusinessData/index'
import { containerWithPaddingAndOverflow } from '../../Theme/styleVariables'

export const MyData = () =>
	<div style={containerWithPaddingAndOverflow}>
		<Menu title='Meus Dados' />
		<Tabs
			pathOne='/meus-dados/fisica'
			tabNameOne='p. física'
			pathTwo='/meus-dados/juridica'
			tabNameTwo='p. jurídica'
		>
			<PersonData />
			<BusinessData />
		</Tabs>
	</div>