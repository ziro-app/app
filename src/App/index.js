import React, { useState, useEffect } from 'react'
import { db } from '../Firebase/db'
import ErrorBoundary from './ErrorBoundary/index'
import { Router } from './Router/index'

export const App = () => {
	const [user, setUser] = useState(null)
	useEffect(() => db.auth().onAuthStateChanged(user => {
		if (user) setUser(user)
	}), [])
	return (
		<ErrorBoundary>
			<Router user={user} setUser={setUser} />
		</ErrorBoundary>
	)
}