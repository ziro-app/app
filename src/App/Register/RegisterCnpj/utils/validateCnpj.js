export const validateCnpj = ({ result: { atividade_principal, atividades_secundarias, situacao } }) => {
	const activityCodes = [...atividades_secundarias, atividade_principal].map(({ code }) => code)
	console.log(activityCodes)
	console.log(situacao)
	const isValidCode = !!activityCodes.filter(code => code === '47.81-4-00').pop()
	if (!isValidCode)
		return { status: 'Error', message: 'CNPJ não contém CNAE 4781-4/00' }
	const isValidStatus = situacao === 'ATIVA'
	if (!isValidStatus)
		return { status: 'Error', message: 'CNPJ não está ativo' }
	return { status: 'Success', message: '' }
}