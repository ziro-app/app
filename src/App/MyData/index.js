import React, { useState, useContext } from 'react'
import { userContext } from '../appContext'
import { auth } from '../../Firebase/index'
import Header from  '@bit/vitorbarbosa19.ziro.header'
import Drawer from '@bit/vitorbarbosa19.ziro.drawer'
import DrawerPanel from '@bit/vitorbarbosa19.ziro.drawer-panel'
import Icon from '@bit/vitorbarbosa19.ziro.icon'
import { Tabs } from './Tabs/index'
import { PersonData } from './PersonData/index'
import { BusinessData } from './BusinessData/index'
import { containerWithPaddingAndOverflow } from '../../Theme/styleVariables'

export const MyData = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { fname, cnpj } = useContext(userContext)
	return (
		<div style={containerWithPaddingAndOverflow}>
			<Header type='icon' title='Meus Dados' icon='menu' setIsOpen={() => setIsOpen(true)} />
			<Drawer isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
				<DrawerPanel
					username={fname}
					usercnpj={cnpj || '28.026.371/0001-61'}
					options={[
						{ path: null,
						  onClick: null,
						  icon: <Icon type='truck' size={16} strokeWidth={3} />,
						  text: 'Atendimentos',
						  soon: true },
						{ path: null,
						  onClick: null,
						  icon: <Icon type='card' size={16} strokeWidth={3} />,
						  text: 'Pagamentos',
						  soon: true },
						{ path: '/meus-dados/fisica',
						  onClick: () => setIsOpen(false),
						  icon: <Icon type='user' size={16} strokeWidth={3} />,
						  text: 'Meus Dados' },
						{ path: null,
						  onClick: () => auth.signOut(),
						  icon: <Icon type='logout' size={16} strokeWidth={3} />,
						  text: 'Sair' },
					]}
				/>
			</Drawer>
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
	)
}