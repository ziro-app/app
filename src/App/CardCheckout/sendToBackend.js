import { useContext } from 'react'
import { userContext } from '../appContext'
import { db } from '../../Firebase/index'

export const sendToBackend = (charge, seller, id) => state => {
	const { uid } = useContext(userContext)
	return new Promise(async (resolve, reject) => {
		try {
			await db.collection('credit-card-payments').doc(id).update({ status: 'paid' })
			try {
				console.log(state)
				// call Zoop API here
			} catch (error) {
				console.log(error)
				// save error to firestore here
				reject('Error in Zoop API')
			}
			resolve('Ok')
		} catch (error) {
			console.log(error)
			// save error to firestore here
			reject('Error in Firestore API')
		}
	})
}
