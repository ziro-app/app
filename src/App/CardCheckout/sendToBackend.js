import { post } from 'axios'
import { db } from '../../Firebase/index'

export const sendToBackend = (id, charge, seller, docId) => state => () => new Promise(async (resolve, reject) => {
	try {
		if (!docId) throw 'Admins cannot submit payments'
		await db.collection('credit-card-payments').doc(id).update({
			buyer: docId,
			status: 'Pago',
			date: new Date()
		})
		try {
			const { cardholder, expiry, number, cvv, installments } = state
			const result = await post(`${process.env.PAY}`, {
				payment_type: 'credit',
				capture: true,
				on_behalf_of: '6e4b9db52193481ca2a345dfc3577c8e',
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
			})
			console.log(result.data)
		} catch (error) {
			console.log(error)
			if (error.response) console.log(error.response)
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