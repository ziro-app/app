import { maxWidth, standardMargin, standardPadding, fontTitle, fontWeightMuted, fontWeightBody,
	fontSizeSmall, primaryColor, grayColor3, grayColor4, alertColor, gradient, shadow } from '../../../Theme/styleVariables'

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
	textAlign: 'center'
},

subtitle = {
	fontSize: '1.4rem',
	textTransform: 'uppercase'
},

dot = {
	color: '#FFE401',
	fontSize: '2.1rem'
},

instructions = {
	display: 'grid',
	gridRowGap: '15px',
	textAlign: 'center',
	color: primaryColor
},

text = {
	fontSize: '1.6rem'
},

cnae = {
	fontFamily: fontTitle,
	fontSize: '1.5rem'
},

form = {
	display: 'grid',
	gridRowGap: '20px'
},

wrapper = {
	display: 'grid',
	gridRowGap: '8px',
	color: primaryColor
},

label = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gridColumnGap: '5px',
	alignItems: 'center',
	marginBottom: '-4px'
},

labelCnpj = {
	...label,
	justifySelf: 'center',
},

input = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	padding: '8px 22px',
	border: `2px solid ${grayColor3}`,
	borderRadius: '8px',
	color: primaryColor,
	backgroundColor: '#FDFDFD',
	boxShadow: `rgba(34,34,34,0.3) 0px 3px 10px -3px`
},

inputCnpj = {
	...input,
	textAlign: 'center'
},

error = {
	display: 'flex',
	alignItems: 'center',
	fontSize: fontSizeSmall,
	color: alertColor,
	fontWeight: fontWeightBody
},

buttonWrapper = {
	display: 'grid',
	gridRowGap: '20px',
	textAlign: 'center',
	marginTop: '-10px'
},

loader = {
	display: 'grid',
	alignItems: 'center',
	justifyItems: 'center',
	height: '30px',
	marginBottom: '-10px'
},

submit = {
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

submitDisabled = {
	...submit,
	cursor: 'initial',
	color: primaryColor,
	background: 'none',
	backgroundColor: grayColor4,
	boxShadow: 'none'
},

scaleButton = {
	scale: 0.95
},


forgotPass = {
	fontSize: fontSizeSmall,
	color: primaryColor
}