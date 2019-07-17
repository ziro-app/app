import { maxWidth, standardMargin, standardPadding, fontWeightMuted, fontWeightBody, fontSizeSmall,
	primaryColor, grayColor1, grayColor2, alertColor, shadow } from '../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	gridRowGap: '20px',
	maxWidth: maxWidth,
	margin: standardMargin,
	padding: standardPadding
},

wrapper = {
	display: 'grid',
	gridRowGap: '5px',
	color: grayColor1,
	fontWeight: fontWeightMuted
},

label = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gridColumnGap: '8px',
	alignItems: 'center'
},

input = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	border: 'none',
	borderBottom: `2px solid ${grayColor2}`,
	color: primaryColor
}