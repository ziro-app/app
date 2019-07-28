import { maxWidth, standardMargin, standardPadding, fontTitle, fontWeightMuted, fontWeightBody,
	fontSizeSmall, primaryColor, grayColor3, alertColor, shadow } from '../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	gridRowGap: '20px',
	maxWidth: maxWidth,
	margin: standardMargin,
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

instructions = {
	display: 'grid',
	gridRowGap: '15px',
	color: primaryColor
},

icon = {
	display: 'grid',
	placeItems: 'center',
	width: '25px',
	height: '25px',
	borderRadius: '100%',
	boxShadow: `0px 3px 10px -5px rgba(34,34,34,0.65)`
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
	gridTemplateColumns: 'auto 1fr auto',
	gridColumnGap: '10px',
	alignItems: 'center',
	marginBottom: '-4px'
},

input = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	padding: '8px 24px',
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
	border: `1px solid ${primaryColor}`,
	borderRadius: '20px',
	fontFamily: fontTitle,
	color: '#FFF',
	backgroundColor: primaryColor,
	boxShadow: `${shadow}`
},

submitDisabled = {
	...submit,
	cursor: 'initial',
	color: primaryColor,
	backgroundColor: '#FFF',
	boxShadow: 'none'
},

scaleButton = {
	scale: 0.95
},


forgotPass = {
	fontSize: fontSizeSmall,
	color: primaryColor
}