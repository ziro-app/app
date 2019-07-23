import React from 'react'
import PropTypes from 'prop-types'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const Router = ({ user }) => user
	? <PrivateRouter user={user} />
	: <PublicRouter />

Router.propTypes = {
	user: PropTypes.object
}