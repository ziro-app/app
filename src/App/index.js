import React, { useState, useEffect } from 'react'

export const App = () => {
	const [state, setState] = useState('hello app')
	useEffect(() => {
		document.title = state
	}, [])
	return <div>{state}</div>
}