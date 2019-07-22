import { maxWidth, standardMargin, standardPadding, fontTitle, primaryColor, grayColor2 } from '../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	gridRowGap: '15px',
	placeItems: 'center',
	maxWidth: maxWidth,
	margin: standardMargin,
	padding: standardPadding
},

menu = {
	width: '100%',
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	justifyItems: 'center',
	fontFamily: fontTitle,
	boxShadow: `0px 10px 8px -10px rgba(34,34,34,0.2), 0px 10px 8px -10px rgba(34,34,34,0.15),
	0px 10px 8px -10px rgba(34,34,34,0.10), 0px 10px 8px -10px rgba(34,34,34,0.05)`
},

tab = {
	WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	width: '100%',
	padding: '10px 0',
	fontSize: '1.8rem',
	textAlign: 'center',
	color: grayColor2,
	borderBottom: `3px solid ${grayColor2}`
},

tabActive = {
	...tab,
	color: primaryColor,
	borderBottom: `3px solid ${primaryColor}`
}