import { useState } from 'react'
import { auth } from '../../../../Firebase/index'

export const useLogin = () => {
	const [authError, setAuthError] = useState('')
	const [submitting, setSubmitting] = useState(false)
	const resetAuthError = () => setAuthError('')
	const login = async (email, password) => {
		try {
			setSubmitting(true)
			const { user: { emailVerified } } = await auth.signInWithEmailAndPassword(email, password)
			if (!emailVerified) {
				setSubmitting(false)
				auth.signOut()
				setAuthError('Acesse o email de verificação para entrar')
			}
		} catch (error) {
			setSubmitting(false)
			console.log(error)
			if (error.code) {
				switch (error.code) {
					case 'auth/network-request-failed': setAuthError('Sem conexão com a rede'); break
					case 'auth/invalid-email': setAuthError('Email inválido'); break
					case 'auth/user-disabled': setAuthError('Usuário bloqueado'); break
					case 'auth/user-not-found': setAuthError('Usuário não cadastrado'); break
					case 'auth/wrong-password': setAuthError('Senha incorreta'); break
					case 'auth/too-many-requests': setAuthError('Muitas tentativas. Tente mais tarde'); break
				}
			}
		}
	}
	return { authError, resetAuthError, submitting, login }
}