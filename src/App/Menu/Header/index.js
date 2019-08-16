import React from 'react'
import PropTypes from 'prop-types'
import { MenuIcon } from '../../../Assets/MenuIcon/index'
import { container, text } from './styles'

export const Header = ({ title }) =>
	<div style={container}>
		<MenuIcon />
		<h1 style={text}>{title}</h1>
	</div>

Header.propTypes = {
	title: PropTypes.string.isRequired
}