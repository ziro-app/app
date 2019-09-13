import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Drawer from '@bit/vitorbarbosa19.ziro.drawer'
import HeaderWithMenu from  '@bit/vitorbarbosa19.ziro.header-with-menu'
import DrawerPanel from '@bit/vitorbarbosa19.ziro.drawer-panel'
import Icon from '@bit/vitorbarbosa19.ziro.icon'
import { container } from './styles'

export const Menu = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div style={container}>
			<HeaderWithMenu title={title} setIsOpen={setIsOpen} />
			<Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
				<DrawerPanel
					username='Vitor Barbosa'
					usercnpj='28.026.371/0001-61'
					options={[
						{
							path: '#',
							icon: <Icon type='truck' size={13} strokeWidth={3} />,
							text: 'Atendimentos'
						},
						{
							path: '#',
							icon: <Icon type='card' size={13} strokeWidth={3} />,
							text: 'Pagamentos'
						},
						{
							path: '#',
							icon: <Icon type='user' size={13} strokeWidth={3} />,
							text: 'Meus Dados'
						},
						{
							path: '#',
							icon: <Icon type='logout' size={13} strokeWidth={3} />,
							text: 'Sair'
						},
					]}
				/>
			</Drawer>
			{children}
		</div>
	)
}

Menu.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}