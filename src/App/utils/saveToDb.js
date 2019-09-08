import { db } from '../../Firebase/db'

export const saveToDb = uid => async (name, value) => {
	const data = await db.firestore().collection('users').where('uid','==',uid).get()
	await data.docs[0].ref.update({ [name]: value })
}