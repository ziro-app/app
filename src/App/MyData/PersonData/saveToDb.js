import { db } from '../../../Firebase/db'

export const saveToDb = async (uid, name, value) => {
	const data = await db.firestore().collection('users').where('id','==',uid).get()
	await data.docs[0].ref.update({ [name]: value })
}