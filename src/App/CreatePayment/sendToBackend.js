import { db } from '../../Firebase/index'

export const sendToBackend = state => () => {
	const { seller, charge, maxInstallments } = state
	return new Promise(async (resolve, reject) => {
		try {
			const result = await db.collection('credit-card-payments').add({
				seller,
				charge,
				maxInstallments
			})
			console.log(result)
			resolve('OK')
		} catch (error) {
			console.log(error)
			reject('NOK')
		}
	})
}
