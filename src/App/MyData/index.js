import React from 'react'
import { Tabs } from './Tabs/index'
import { PersonData } from './PersonData/index'
import { BusinessData } from './BusinessData/index'

export const MyData = () =>
	<Tabs
		pathOne='/meus-dados/fisica'
		tabNameOne='p. física'
		pathTwo='/meus-dados/juridica'
		tabNameTwo='p. jurídica'
	>
		<PersonData />
		<BusinessData />
	</Tabs>