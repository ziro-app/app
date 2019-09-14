import React, { useState } from 'react'
import { auth } from '../../Firebase/index'
import HeaderWithMenu from  '@bit/vitorbarbosa19.ziro.header-with-menu'
import Drawer from '@bit/vitorbarbosa19.ziro.drawer'
import DrawerPanel from '@bit/vitorbarbosa19.ziro.drawer-panel'
import Icon from '@bit/vitorbarbosa19.ziro.icon'
import { Tabs } from './Tabs/index'
import { PersonData } from './PersonData/index'
import { container } from './styles'

export const MyData = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div style={container}>
			<HeaderWithMenu title='Meus Dados' setIsOpen={() => setIsOpen(true)} />
			<Drawer isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
				<DrawerPanel
					username='Vitor Almeida Barbosa'
					usercnpj='28.026.371/0001-61'
					options={[
						{ path: null,
						  onClick: null,
						  icon: <Icon type='truck' size={13} strokeWidth={3} />,
						  text: 'Atendimentos' },
						{ path: null,
						  onClick: null,
						  icon: <Icon type='card' size={13} strokeWidth={3} />,
						  text: 'Pagamentos' },
						{ path: '/meus-dados/fisica',
						  onClick: () => setIsOpen(false),
						  icon: <Icon type='user' size={13} strokeWidth={3} />,
						  text: 'Meus Dados' },
						{ path: null,
						  onClick: () => auth.signOut(),
						  icon: <Icon type='logout' size={13} strokeWidth={3} />,
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
				<div>Pessoa Jurídica</div>
			</Tabs>
		</div>
	)
}