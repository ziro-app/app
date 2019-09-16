import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, Link } from 'wouter'
import { CloseIcon } from '../../../Assets/CloseIcon/index'
import { BackIcon } from '../../../Assets/BackIcon/index'
import { back, anchor } from './styles'

export const BackButton = ({ backPath, setForward }) =>
	<div style={back}>
		<Link href={backPath} onClick={setForward}>
			<a style={anchor}><BackIcon /></a>
		</Link>
	</div>

BackButton.propTypes = {
	backPath: PropTypes.string.isRequired,
	setForward: PropTypes.func.isRequired
}