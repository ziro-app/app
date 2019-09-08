import React, { useState, useEffect } from 'react'
import { db } from '../Firebase/db'
import ErrorBoundary from './ErrorBoundary/index'
import { InitialLoader } from './InitialLoader/index'
import { Router } from './Router/index'

export const App = () => {
	/*== APP STATES ==*/
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [rg, setRg] = useState('')
	const [cpf, setCpf] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	/*== INITIAL DATA LOAD ==*/
	useEffect(() => db.auth().onAuthStateChanged(user => {
		if (user && user.emailVerified) {
			setUser(user)
			db.firestore().collection('users').where('uid','==',user.uid).onSnapshot(
				snapshot => {
					const { fname, lname, rg, cpf, phone } = snapshot.docs[0].data()
					setFname(fname ? fname : '')
					setLname(lname ? lname : '')
					setRg(rg ? rg : '')
					setCpf(cpf ? cpf : '')
					setWhatsapp(phone ? phone : '')
					setIsLoading(false)
				},
				error => {
					console.log(error)
					setErrorFetch('Erro. Recarregue a página')
					setIsLoading(false)
				}
			)
		}
		else setUser(null)
		if (isLoading) setIsLoading(false)
	}), [])
	return (
		<ErrorBoundary>
			{isLoading ? <InitialLoader /> : <Router user={user} />}
		</ErrorBoundary>
	)
}