import { post } from 'axios'
import { db } from '../../Firebase/index'
import { translateStatus } from './translateStatus'

export const sendToBackend = (id, charge, seller, sellerZoopId, docId) => state => () => new Promise(async (resolve, reject) => {
	try {
		if (!docId) throw 'Admins cannot submit payments'
		try {
			const { cardholder, expiry, number, cvv, installments } = state
			const { data } = await post(`${process.env.PAY}`, {
				payment_type: 'credit',
				capture: false,
				on_behalf_of: sellerZoopId,
				source: {
					usage: 'single_use',
					amount: charge,
					currency: 'BRL',
					type: 'card',
					card: {
						'holder_name': cardholder,
						'expiration_month': expiry.substring(0,2),
						'expiration_year': `20${expiry.substring(3,5)}`,
						'card_number': number,
						'security_code': cvv
					}
				},
				'installment_plan': {
					mode: 'interest_free',
					'number_installments': installments
				},
				'statement_descriptor': `Ziro por ${seller}`
			}, { headers: { 'Authorization': `Basic ${process.env.PAY_TOKEN}` }})
			console.log(data)
			try {
				await db.collection('credit-card-payments').doc(id).update({
					buyer: docId,
					status: translateStatus(data.status),
					installments: data.installment_plan.number_installments,
					date: new Date(),
					brand: data.payment_method.card_brand,
					cardholder: data.payment_method.holder_name,
					firstFour: data.payment_method.first4_digits,
					lastFour: data.payment_method.last4_digits,
					zoopId: data.id,
					fees: data.fees * 100,
					authorizer: data.gateway_authorizer
				})
			} catch (error) {
				console.log(error)
				// save error to firestore here
				reject('Error updating to Firestore API')
			}
		} catch (error) {
			if (error.response) {
				console.log(error.response)
				try {
					const docRef = await db.collection('credit-card-errors').add({
						httpStatus: error.response.status,
						description: error.response.data,
						buyer: docId,
						date: new Date()
					})
					if (docRef) console.log('Error saved to database')
				} catch (error) { console.log('Error NOT saved to database',error) }
			} else console.log(error)
			reject('Error in Zoop API')
		}
	} catch (error) {
		console.log(error)
		// save error to firestore here
		reject('Error in Firestore API')
	}
	resolve('Ok')
})