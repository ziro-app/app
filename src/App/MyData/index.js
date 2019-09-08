import React from 'react'
import { Tabs } from './Tabs/index'
import { PersonData } from './PersonData/index'
import { container } from './styles'

export const MyData = () =>
	<div style={container}>
		<Tabs
			pathOne='/meus-dados/fisica'
			tabNameOne='p. física'
			pathTwo='/meus-dados/juridica'
			tabNameTwo='p. jurídica'
		>
			<PersonData />
			<div>Pessoa Jurídica</div>
		</Tabs>
	</div>