import React, { useEffect } from 'react'

export const App = () => {
	useEffect(() => {
		window.title = 'Hello'
	}, [])
	return <div>App</div>
}