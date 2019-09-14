import React from 'react'
import PropTypes from 'prop-types'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const Router = ({ userLoggedIn, signOut }) =>
	userLoggedIn ? <PrivateRouter signOut={signOut} /> : <PublicRouter />

Router.propTypes = {
	userLoggedIn: PropTypes.bool,
	signOut: PropTypes.func
}