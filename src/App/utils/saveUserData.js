import { db } from '../../Firebase/index'

export const saveUserData = uid => async (name, value) => {
	const data = await db.collection('buyers').where('uid','==',uid).get()
	await data.docs[0].ref.update({ [name]: value })
}