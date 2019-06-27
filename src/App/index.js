import React, { useEffect } from 'react'
import { connectDb } from './utils/connectDb'

export const App = () => {
	useEffect(() => connectDb())
	return <div>App</div>
}