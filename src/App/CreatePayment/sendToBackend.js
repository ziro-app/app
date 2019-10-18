import { db } from '../../Firebase/index'

export const sendToBackend = state => () => {
	const { seller, charge, maxInstallments } = state
	const baseUrl = 'https://ziro.app/checkout?id='
	return new Promise(async (resolve, reject) => {
		try {
			const docRef = await db.collection('credit-card-payments').add({
				seller,
				charge,
				maxInstallments
			})
			const doc = await docRef.get()
			if (doc) await navigator.clipboard.writeText(`${baseUrl}${doc.id}`)
			resolve('Link copiado')
		} catch (error) {
			console.log(error)
			reject('NOK')
		}
	})
}
