// pattern must use '#' to represent valid user input chars
export const maskInput = (value, pattern) => {
	if (value) {
		// remove from value all chars placed by the mask in a previous iteration
		const charsToRemove = pattern.replace(/#/g, '')
		const rawValue = charsToRemove.split('').reduce((acc,cur) => acc.replace(cur,''), value.toString())
		// slice the pattern so it matches the length of the value
		const nthOccurrence = pattern.split('#', rawValue.length).join('#').length
		const patternAdjusted = pattern.slice(0, nthOccurrence + 1)
		// replace all chars in pattern to match value and create the mask
		let index = 0
		return patternAdjusted.replace(/#/g, () => rawValue[index++])
	}
	return ''
}