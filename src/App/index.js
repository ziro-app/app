import React, { useState, useEffect } from 'react'
import { db } from '../Firebase/db'
import { useLocation } from 'wouter'
import ErrorBoundary from './ErrorBoundary/index'
import { InitialLoader } from './InitialLoader/index'
import { Router } from './Router/index'

export const App = () => {
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [location, setLocation] = useLocation()
	useEffect(() => db.auth().onAuthStateChanged(user => {
		if (user) setUser(user)
		else setUser(null)
		if (setIsLoading) setIsLoading(false)
	}), [])
	return (
		<ErrorBoundary>
			{isLoading ? <InitialLoader /> : <Router user={user} setUser={setUser} location={location} setLocation={setLocation} />}
		</ErrorBoundary>
	)
}