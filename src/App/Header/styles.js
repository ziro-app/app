import { maxWidth, standardMargin, standardPadding, fontTitle, primaryColor, grayColor2 } from '../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	gridRowGap: '30px',
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
	boxShadow: `0px 9px 8px -10px rgba(34,34,34,0.2), 0px 9px 8px -10px rgba(34,34,34,0.15),
	0px 9px 8px -10px rgba(34,34,34,0.10), 0px 9px 8px -10px rgba(34,34,34,0.05)`
},

tab = {
	width: '100%',
	padding: '10px 0',
	textAlign: 'center',
	color: grayColor2,
	borderBottom: `2px solid ${grayColor2}`
},

tabActive = Object.assign({}, tab, {
	color: primaryColor,
	borderBottom: `2px solid ${primaryColor}`
})