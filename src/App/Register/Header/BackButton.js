import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'wouter'
import Icon from '@bit/vitorbarbosa19.ziro.icon'
import { back } from './styles'

export const BackButton = ({ backPath, setForward }) =>
	<Link href={backPath} onClick={setForward}>
		<a style={back}>
			<Icon type='back' />
		</a>
	</Link>

BackButton.propTypes = {
	backPath: PropTypes.string.isRequired,
	setForward: PropTypes.func.isRequired
}