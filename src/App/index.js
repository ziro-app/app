import React, { useState, createContext, useEffect } from 'react'
import { db } from '../Firebase/db'
import { userContext } from './appContext'
import { saveToDb } from './utils/saveToDb'
import ErrorBoundary from './ErrorBoundary/index'
import { InitialLoader } from './InitialLoader/index'
import { Router } from './Router/index'

export const App = () => {
	/*== APP STATE ==*/
	const [user, setUser] = useState(null)
	const [loadingUser, setLoadingUser] = useState(true)
	const [loadingData, setLoadingData] = useState(true)
	const [uid, setUid] = useState('')
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [rg, setRg] = useState('')
	const [cpf, setCpf] = useState('')
	const [email, setEmail] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	/*== INITIAL DATA LOAD ==*/
	useEffect(() => db.auth().onAuthStateChanged(user => {
		if (user && user.emailVerified) {
			setUser(user)
			setUid(user.uid)
			setEmail(user.email)
			db.firestore().collection('users').where('uid','==',user.uid).onSnapshot(
				snapshot => {
					const { fname, lname, rg, cpf, phone } = snapshot.docs[0].data()
					setFname(fname ? fname : '')
					setLname(lname ? lname : '')
					setRg(rg ? rg : '')
					setCpf(cpf ? cpf : '')
					setWhatsapp(phone ? phone : '')
					setLoadingData(false)
				},
				error => {
					console.log(error)
					setErrorFetch('Erro. Recarregue a página')
					setLoadingData(false)
				}
			)
		}
		else setUser(null)
		if (loadingUser) setLoadingUser(false)
	}), [])
	/*== RENDER LOGIC ==*/
	const saveData = saveToDb(uid)
	const userData = { loadingData, fname, lname, rg, cpf, email, whatsapp,
		setFname, setLname, setRg, setCpf, setWhatsapp, saveData }
	const renderApp = {
		true: 
			<InitialLoader />,
		false:
			<userContext.Provider value={userData}>
				<Router user={user} />
			</userContext.Provider>
	}
	return <ErrorBoundary>{renderApp[loadingUser]}</ErrorBoundary>
}