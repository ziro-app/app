import { useState } from 'react'
import { db } from '../../../Firebase/db'

export const useLogin = () => {
	const [authError, setAuthError] = useState('')
	const [submitting, setSubmitting] = useState(false)
	const login = async (email, password) => {
		try {
			setSubmitting(true)
			const authResult = await db.auth().signInWithEmailAndPassword(email, password)
			setSubmitting(false)
			console.log(authResult)
		} catch (error) {
			setSubmitting(false)
			console.log(error)
			if (error.code) {
				switch (error.code) {
					case 'auth/invalid-email': setAuthError('Email não cadastrado'); break
					case 'auth/user-disabled': setAuthError('Usuário bloqueado'); break
					case 'auth/user-not-found': setAuthError('Usuário não cadastrado'); break
					case 'auth/wrong-password': setAuthError('Senha incorreta'); break
				}
			}
		}
	}
	return { authError, submitting, login }
}