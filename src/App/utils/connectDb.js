import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
const APP_ID = process.env.APP_ID
const SERVICE_NAME = process.env.SERVICE_NAME
const DB_NAME = process.env.DB_NAME

export const connectDb = async () => {
	try {
		const client = Stitch.initializeDefaultAppClient(APP_ID)
		const db = client.getServiceClient(RemoteMongoClient.factory, SERVICE_NAME).db(DB_NAME)
		const result = await client.auth.loginWithCredential(new AnonymousCredential())
		console.log(result)
		// client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
		//   db.collection('Users').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
		// ).then(() =>
		//   db.collection('Users').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
		// ).then(docs => {
		//     console.log("Found docs", docs)
		//     console.log("[MongoDB Stitch] Connected to Stitch")
		// }).catch(err => {
		//     console.error(err)
		// })
	}
}