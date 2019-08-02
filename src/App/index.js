import React, { useState, useEffect } from 'react'
import { db } from '../Firebase/db'
import ErrorBoundary from './ErrorBoundary/index'
import { InitialLoader } from './InitialLoader/index'
import { Router } from './Router/index'

export const App = () => {
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => db.auth().onAuthStateChanged(user => {
		if (user && user.emailVerified) setUser(user)
		else setUser(null)
		if (isLoading) setIsLoading(false)
	}), [])
	return (
		<ErrorBoundary>
			{isLoading ? <InitialLoader /> : <Router user={user} />}
		</ErrorBoundary>
	)
}