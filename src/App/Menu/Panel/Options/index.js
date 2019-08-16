import React from 'react'
import PropTypes from 'prop-types'
import { CloseIcon } from '../../../../Assets/CloseIcon/index'
import { TruckIcon } from '../../../../Assets/TruckIcon/index'
import { CardIcon } from '../../../../Assets/CardIcon/index'
import { NameIcon } from '../../../../Assets/NameIcon/index'
import { container, close, options, option, icon, text, soon } from './styles'

export const Options = ({ setIsOpen }) =>
	<div style={container}>
		<div style={close} onClick={() => setIsOpen(false)}>
			<CloseIcon />
		</div>
		<ul style={options}>
			<li style={option}>
				<div style={icon}><TruckIcon size={17} /></div>
				<h1 style={text}>Atendimentos<label style={soon}>&nbsp;&nbsp;(em breve)</label></h1>
			</li>
			<li style={option}>
				<div style={icon}><CardIcon size={17} /></div>
				<h1 style={text}>Pagamentos<label style={soon}>&nbsp;&nbsp;(em breve)</label></h1>
			</li>
			<li style={option}>
				<div style={icon}><NameIcon size={17} /></div>
				<h1 style={text}>Meus Dados</h1>
			</li>
			<li style={option}>
				<div style={icon}><TruckIcon size={17} /></div>
				<h1 style={text}>Sair</h1>
			</li>
		</ul>
	</div>

Options.propTypes = {
	setIsOpen: PropTypes.func.isRequired
}