import { maxWidth, standardPadding, fontTitle, primaryColor, gradient, shadow } from '../../../Theme/styleVariables'

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
	fontSize: '2.1rem',
	color: primaryColor
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
	gridRowGap: '15px',
	color: primaryColor
},

call = {
	marginBottom: '25px'
},

word = {
	position: 'relative'	
},

color = {
	position: 'absolute',
	top: '65%',
	left: '5%',
	width: '115px',
	height: '8px',
	zIndex: '-1',
	background: 'rgba(255,228,0,0.8)'
},

text = {
	fontSize: '1.5rem'
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