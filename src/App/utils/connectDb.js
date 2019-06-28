import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
/* variables */
const APP_ID = process.env.APP_ID
const SERVICE_NAME = process.env.SERVICE_NAME
const DB_NAME = process.env.DB_NAME
const factory = RemoteMongoClient.factory
const credential = new AnonymousCredential()

export const connectDb = async () => {
	try {
		const client = Stitch.initializeDefaultAppClient(APP_ID)
		const db = client.getServiceClient(factory, SERVICE_NAME).db(DB_NAME)
		const { id: userId } = await client.auth.loginWithCredential(credential)
		console.log(userId)
		const users = await db.collection('Users').find({ owner_id: userId }).asArray()
		console.log(users)
	} catch (error) {
		console.log(error)
	}
}