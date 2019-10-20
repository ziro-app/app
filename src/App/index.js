import React, { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import { auth, db } from '../Firebase/index'
import { userContext } from './appContext'
import { saveUserData } from './utils/saveUserData'
import ErrorLoading from '@bit/vitorbarbosa19.ziro.error-loading'
import ErrorBoundary from './ErrorBoundary/index'
import { InitialLoader } from './InitialLoader/index'
import { Router } from './Router'

export const App = () => {
	/*== APP STATE ==*/
	const [location, setLocation] = useLocation()
	const [loadingUser, setLoadingUser] = useState(true)
	const [loadingData, setLoadingData] = useState(true)
	const [errorFetch, setErrorFetch] = useState('')
	const [docId, setDocId] = useState('')
	const [uid, setUid] = useState('')
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [rg, setRg] = useState('')
	const [cpf, setCpf] = useState('')
	const [birth, setBirth] = useState('')
	const [email, setEmail] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	const [cnpj, setCnpj] = useState('')
	const [razao, setRazao] = useState('')
	const [fantasia, setFantasia] = useState('')
	const [rua, setRua] = useState('')
	const [numero, setNumero] = useState('')
	const [complemento, setComplemento] = useState('')
	const [bairro, setBairro] = useState('')
	const [cep, setCep] = useState('')
	const [cidade, setCidade] = useState('')
	const [estado, setEstado] = useState('')
	const [pais, setPais] = useState('')
	const [ie, setIe] = useState('')
	/*== SET AUTH AND DB LISTENERS ==*/
	useEffect(() => {
		let unsubscribe = () => null
		return auth.onAuthStateChanged(user => {
			if (user && user.emailVerified) {
				setUid(user.uid)
				setEmail(user.email)
				unsubscribe = db.collection('users').where('uid','==',user.uid).onSnapshot(
					snapshot => {
						if (!snapshot.empty) {
							setDocId(snapshot.docs[0].id)
							const { fname, lname, rg, cpf, birth, phone } = snapshot.docs[0].data()
							/* person data */
							setFname(fname ? fname : '')
							setLname(lname ? lname : '')
							setRg(rg ? rg : '')
							setCpf(cpf ? cpf : '')
							setBirth(birth ? birth : '')
							setWhatsapp(phone ? phone : '')
							const { cnpj, razao, fantasia, rua, numero, complemento, bairro,
								cep, cidade, estado, pais, ie } = snapshot.docs[0].data()
							/* business data */
							setCnpj(cnpj ? cnpj : '')
							setRazao(razao ? razao : '')
							setFantasia(fantasia ? fantasia : '')
							setRua(rua ? rua : '')
							setNumero(numero ? numero : '')
							setComplemento(complemento ? complemento : '')
							setBairro(bairro ? bairro : '')
							setCep(cep ? cep : '')
							setCidade(cidade ? cidade : '')
							setEstado(estado ? estado : '')
							setPais(pais ? pais : '')
							setIe(ie ? ie : '')
							setErrorFetch('')
						} else setErrorFetch('Erro. Recarregue a página')
						if (loadingData) setLoadingData(false)
					},
					error => {
						console.log(error)
						setErrorFetch('Erro. Recarregue a página')
						if (loadingData) setLoadingData(false)
					}
				)
				if (loadingData) setLoadingData(false)
			} else {
				unsubscribe()
				setLoadingData(true)
				setErrorFetch('')
				setUid('')
				setFname('')
				setLname('')
				setRg('')
				setCpf('')
				setBirth('')
				setEmail('')
				setWhatsapp('')
			}
			if (loadingUser) setLoadingUser(false)
	})}, [])
	/*== RENDER LOGIC ==*/
	const saveData = saveUserData(uid)
	const userData = { loadingData, errorFetch, saveData, docId, uid,
		fname, lname, rg, cpf, birth, email, whatsapp,
		setFname, setLname, setRg, setCpf, setBirth, setWhatsapp,
		cnpj, razao, fantasia, rua, numero, complemento, bairro, cep, cidade, estado, pais, ie,
		setCnpj, setRazao, setFantasia, setRua, setNumero, setComplemento, setBairro, setCep, setCidade, setEstado, setPais, setIe
	}
	if (loadingUser) return <InitialLoader />
	if (errorFetch) return <ErrorLoading />
	return (
		<ErrorBoundary>
			<userContext.Provider value={userData}>
				<Router isLogged={!!uid} />
			</userContext.Provider>
		</ErrorBoundary>
	)
}