import { db, fs } from '../../Firebase/index'

export const sendToBackend = (id, charge, seller, docId) => state => () => new Promise(async (resolve, reject) => {
	try {
		await db.collection('credit-card-payments').doc(id).update({ status: 'paid' })
		try {
			await db.collection('users').doc(docId).update({ payments: fs.FieldValue.arrayUnion(id) })
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
			reject('Error in Firestore API: Buyers Collection')
		}
		resolve('Ok')
	} catch (error) {
		console.log(error)
		// save error to firestore here
		reject('Error in Firestore API: Payments Collection')
	}
})