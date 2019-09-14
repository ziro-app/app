import React from 'react'
import PropTypes from 'prop-types'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const Router = ({ userLoggedIn }) =>
	userLoggedIn ? <PrivateRouter /> : <PublicRouter />

Router.propTypes = {
	userLoggedIn: PropTypes.bool
}