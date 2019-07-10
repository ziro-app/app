import React from 'react'
import ErrorBoundary from './ErrorBoundary/index'
import { Router } from './Router/index'

export const App = () =>
	<ErrorBoundary>
		<Router />
	</ErrorBoundary>