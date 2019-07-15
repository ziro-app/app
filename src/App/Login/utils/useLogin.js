import { useState } from 'react'
import { db } from '../../../Firebase/db'

export const useLogin = changeUiState => {
	const [authError, setAuthError] = useState('')
	const login = async (email, password) => {
		try {
			changeUiState('SUBMIT_CREDENTIALS')
			const authResult = await db.auth().signInWithEmailAndPassword(email, password)
			changeUiState('SUCCESS')
			console.log(authResult)
		} catch (error) {
			console.log('hei')
			changeUiState('ERROR')
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
	return { authError, login }
}