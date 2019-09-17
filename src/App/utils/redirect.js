export const redirect = location => {
	switch (location) {
		case '/cadastrar/validar-email': return true
		case '/login': return true
		default: return false
	}
}