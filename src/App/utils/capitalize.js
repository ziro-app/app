export const capitalize = input => {
	if (input) {
		const capitalized = input.split(' ').map(word => word.split('').map(
			(char, index) => {
				if (index === 0)
					return char.toUpperCase()
				return char
			}
		).join('')).join(' ')
		return capitalized
	}
	return ''
}