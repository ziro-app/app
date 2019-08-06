import { maxWidth, standardPadding, successColor, fontTitle, fontWeightBody,
	fontSizeSmall, primaryColor, grayColor4, alertColor, gradient, shadow } from '../../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	gridRowGap: '20px',
	maxWidth: maxWidth,
	margin: '20px auto 80px',
	padding: standardPadding
},

success = {
	display: 'grid',
	justifyItems: 'center'
},

message = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	alignItems: 'center',
	gridColumnGap: '7px',
	color: successColor
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

successMsg = {
	display: 'flex',
	alignItems: 'center',
	fontSize: fontSizeSmall,
	color: successColor,
	fontWeight: fontWeightBody	
},

errorMsg = {
	...successMsg,
	color: alertColor
},

buttonWrapper = {
	display: 'grid',
	gridRowGap: '20px',
	textAlign: 'center'
},

loader = {
	display: 'grid',
	alignItems: 'center',
	justifyItems: 'center',
	height: '30px',
	marginTop: '-10px'
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

secondary = {
	...submit,
	color: primaryColor,
	background: `linear-gradient(rgb(244, 244, 244) 10%, rgb(247, 247, 247) 30%, rgb(250, 250, 250) 60%, rgb(255, 255, 255))`,
	boxShadow: `rgba(34, 34, 34, 0.45) 0px 2px 15px -4px,rgba(34, 34, 34, 0.25) 0px 2px 15px -4px`
},

secondaryDisabled = {
	...secondary,
	background: 'none',
	backgroundColor: grayColor4,
	boxShadow: 'none'
},

scaleButton = {
	scale: 0.95
}