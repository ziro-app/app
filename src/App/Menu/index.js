import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { userContext } from '../appContext'
import { auth } from '../../Firebase/index'
import Header from  '@bit/vitorbarbosa19.ziro.header'
import Drawer from '@bit/vitorbarbosa19.ziro.drawer'
import DrawerPanel from '@bit/vitorbarbosa19.ziro.drawer-panel'
import Icon from '@bit/vitorbarbosa19.ziro.icon'

export const Menu = ({ title }) => {
	const [isOpen, setIsOpen] = useState(false)
	const { fname, cnpj } = useContext(userContext)
	return (
		<>
			<Header type='icon' title={title} icon='menu' setIsOpen={() => setIsOpen(true)} />
			<Drawer isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
				<DrawerPanel
					username={fname || 'Usuário'}
					usercnpj={cnpj || 'nenhum cadastrado'}
					options={[
						{ path: null,
						  onClick: null,
						  icon: <Icon type='truck' size={16} strokeWidth={3} />,
						  text: 'Atendimentos',
						  soon: true },
						{ path: null,
						  onClick: null,
						  icon: <Icon type='card' size={16} strokeWidth={3} />,
						  text: 'Pagamentos' },
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
		</>
	)
}

Menu.propTypes = {
	title: PropTypes.string.isRequired
}