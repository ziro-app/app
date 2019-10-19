import { useContext } from 'react'
import { userContext } from '../appContext'
import { db } from '../../Firebase/index'

export const sendToBackend = (charge, seller) => state => {
	const { uid } = useContext(userContext)
	return new Promise(async (resolve, reject) => {
		try {
			const docRef = await db.collection('credit-card-payments').add({
				seller,
				charge,
				maxInstallments,
				status: 'unpaid'
			})
			try {
				const doc = await docRef.get()
			} catch (error) {
				console.log(error)
				reject('Error in clipboard API')
			}
			resolve('Link copiado')
		} catch (error) {
			console.log(error)
			reject('Erro ao criar cobrança')
		}
	})
}
