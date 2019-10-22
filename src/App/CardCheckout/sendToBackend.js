import { db } from '../../Firebase/index'

export const sendToBackend = (id, charge, seller, docId) => state => () => new Promise(async (resolve, reject) => {
	try {
		await db.collection('credit-card-payments').doc(id).update({ status: 'expired', buyer: docId })
		try {
			console.log(state)
			// call Zoop API here
		} catch (error) {
			console.log(error)
			// save error to firestore here
			reject('Error in Zoop API')
		}
	} catch (error) {
		console.log(error)
		// save error to firestore here
		reject('Error in Firestore API')
	}
	resolve('Ok')
})