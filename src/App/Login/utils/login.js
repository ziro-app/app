import { db } from '../../../Firebase/db'

export const login = async (email, password) => {
	try {
		const authResult = await db.auth().signInWithEmailAndPassword(email, password)
		console.log(authResult)
	} catch (error) {
		console.log(error)
	}
}