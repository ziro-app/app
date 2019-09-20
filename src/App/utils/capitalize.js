export const capitalize = input => {
	if (input) {
		return input.split(' ').map(word => word.split('').map(
			(char, index) => {
				if (index === 0)
					return char.toUpperCase()
				return char.toLowerCase()
			}
		).join('')).join(' ')
	}
	return ''
}