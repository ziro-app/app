import { db } from '../../Firebase/index'

export const sendToBackend = state => () => {
	const { seller, charge, maxInstallments, sellersAndIds, setSeller, setCharge, setMaxInstallments } = state
	const sellerId = sellersAndIds.find(([name, id]) => name === seller)
	const baseUrl = 'https://ziro.app/checkout?id='
	return new Promise(async (resolve, reject) => {
		try {
			if (sellerId instanceof Array && sellerId[1]) {
				const docRef = await db.collection('credit-card-payments').add({
					seller,
					sellerZoopId: sellerId[1],
					charge,
					maxInstallments,
					status: 'pendente'
				})
				setSeller('')
				setCharge('')
				setMaxInstallments('')
				try {
					const doc = await docRef.get()
					if (doc) await navigator.clipboard.writeText(`${baseUrl}${doc.id}`)
				} catch (error) {
					console.log(error)
					reject('Error in clipboard API')
				}
				resolve('Link copiado')
			} reject('Seller not found in database')
		} catch (error) {
			console.log(error)
			reject('Erro ao criar cobrança')
		}
	})
}
