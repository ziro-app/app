import React from 'react'
import { useRoutes } from 'hookrouter'

const routes = {
	'/': () => <div style={{ fontSize: '18px' }}>Login component to be used</div>
}

export const Router = () => useRoutes(routes) || <div>Not found</div>