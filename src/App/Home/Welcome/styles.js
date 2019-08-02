import { maxWidth, standardMargin, standardPadding, fontTitle, primaryColor, gradient, shadow } from '../../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	gridRowGap: '20px',
	maxWidth: maxWidth,
	margin: '40px auto 80px',
	padding: standardPadding
},

welcome = {
	fontFamily: fontTitle,
	fontSize: '2.1rem'
},

subtitle = {
	fontSize: '1.4rem',
	textTransform: 'uppercase'
},

dot = {
	color: '#FFE401',
	fontSize: '2.1rem'
},

benefits = {
	display: 'grid',
	gridRowGap: '15px'
},

wrapper = {
	display: 'grid',
	gridRowGap: '5px',
	color: primaryColor
},

label = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gridColumnGap: '10px',
	alignItems: 'center',
	fontFamily: fontTitle,
	fontSize: '1.7rem'
},

icon = {
	display: 'grid',
	placeItems: 'center',
	width: '30px',
	height: '30px',
	borderRadius: '100%',
	boxShadow: `0px 3px 11px -4px rgba(34,34,34,0.7)`
},

text = {
	fontSize: '1.6rem'
},

submit = {
	marginTop: '20px',
	WebkitAppearance: 'none',
	WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	MozAppearance: 'none',
	outline: 'none',
	cursor: 'pointer',
	padding: '10px 0px',
	border: 'none',
	borderRadius: '20px',
	fontFamily: fontTitle,
	color: '#FFF',
	background: gradient,
	boxShadow: `${shadow}`
},

scaleButton = {
	scale: 0.95
}