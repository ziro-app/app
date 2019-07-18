import { maxWidth, standardMargin, standardPadding, fontTitle, fontWeightMuted, fontWeightBody,
	fontSizeSmall, primaryColor, grayColor3, alertColor, shadow } from '../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	gridRowGap: '30px',
	maxWidth: maxWidth,
	margin: standardMargin,
	padding: standardPadding
},

instructions = {
	display: 'grid',
	gridRowGap: '30px',
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
	justifyItems: 'center',
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
	height: '30px'
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