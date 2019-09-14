import React, { useState, useEffect } from 'react'
import { auth, db } from '../Firebase/index'
import { userContext } from './appContext'
import { saveUserData } from './utils/saveUserData'
import ErrorBoundary from './ErrorBoundary/index'
import { InitialLoader } from './InitialLoader/index'
import { Router } from './Router/index'

export const App = () => {
	/*== APP STATE ==*/
	const [loadingUser, setLoadingUser] = useState(true)
	const [loadingData, setLoadingData] = useState(true)
	const [errorFetch, setErrorFetch] = useState('')
	const [uid, setUid] = useState('')
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [rg, setRg] = useState('')
	const [cpf, setCpf] = useState('')
	const [email, setEmail] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	/*== INITIAL DATA LOAD ==*/
	useEffect(() => {
		let unsubscribe = () => null
		return auth.onAuthStateChanged(user => {
			if (user && user.emailVerified) {
				setUid(user.uid)
				setEmail(user.email)
				unsubscribe = db.collection('users').where('uid','==',user.uid).onSnapshot(
					snapshot => {
						const { fname, lname, rg, cpf, phone } = snapshot.docs[0].data()
						setFname(fname ? fname : '')
						setLname(lname ? lname : '')
						setRg(rg ? rg : '')
						setCpf(cpf ? cpf : '')
						setWhatsapp(phone ? phone : '')
						setErrorFetch('')
						if (loadingData) setLoadingData(false)
					},
					error => {
						console.log(error)
						setErrorFetch('Erro. Recarregue a página')
						if (loadingData) setLoadingData(false)
					}
				)
			} else {
				unsubscribe()
				setLoadingData(true)
				setErrorFetch('')
				setUid('')
				setFname('')
				setLname('')
				setRg('')
				setCpf('')
				setEmail('')
				setWhatsapp('')
			}
			if (loadingUser) setLoadingUser(false)
	})}, [])
	/*== RENDER LOGIC ==*/
	const saveData = saveUserData(uid)
	const userData = { loadingData, errorFetch, fname, lname, rg, cpf, email, whatsapp,
		setFname, setLname, setRg, setCpf, setWhatsapp, saveData }
	const renderApp = {
		true: 
			<InitialLoader />,
		false:
			<userContext.Provider value={userData}>
				<Router userLoggedIn={!!uid} />
			</userContext.Provider>
	}
	return <ErrorBoundary>{renderApp[loadingUser]}</ErrorBoundary>
}