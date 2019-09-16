import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'wouter'
import { BackIcon } from '../../../Assets/BackIcon/index'
import { back } from './styles'

export const BackButton = ({ backPath, setForward }) =>
	<Link href={backPath} onClick={setForward}>
		<a style={back}><BackIcon /></a>
	</Link>

BackButton.propTypes = {
	backPath: PropTypes.string.isRequired,
	setForward: PropTypes.func.isRequired
}