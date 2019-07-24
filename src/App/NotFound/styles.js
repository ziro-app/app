import { maxWidth, standardMargin, standardPadding,
	primaryColor, fontTitle, fontWeightTitle, shadow } from '../../Theme/styleVariables'

export const 

container = {
	display: 'grid',
	maxWidth: maxWidth,
	margin: standardMargin,
	padding: standardPadding,
	textAlign: 'center'
},

logo = {
	justifySelf: 'center'
},

title = {
	color: primaryColor,
	fontFamily: fontTitle,
	fontWeight: fontWeightTitle,
	textTransform: 'uppercase'
},

body = {
	margin: '12px 0'
},

button = {
	marginTop: '12px',
	WebkitAppearance: 'none',
	WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	MozAppearance: 'none',
	outline: 'none',
	cursor: 'pointer',
	padding: '10px 0px',
	border: `1px solid ${primaryColor}`,
	borderRadius: '20px',
	fontFamily: fontTitle,
	color: '#FFF',
	backgroundColor: primaryColor,
	boxShadow: `${shadow}`
}