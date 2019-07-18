import { maxWidth, standardMargin, standardPadding, fontTitle, fontWeightMuted, fontWeightBody,
	fontSizeSmall, primaryColor, grayColor1, grayColor2, alertColor, shadow } from '../../Theme/styleVariables'

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
	gridRowGap: '5px',
	textAlign: 'center',
	color: primaryColor
},

text = {
	fontSize: fontSizeSmall
},

cnae = {
	fontFamily: fontTitle,
	fontSize: fontSizeSmall
},

form = {
	display: 'grid',
	gridRowGap: '20px'
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
	gridRowGap: '30px',
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

submitDisabled = Object.assign({}, submit, {
	cursor: 'initial',
	color: primaryColor,
	backgroundColor: '#FFF',
	boxShadow: 'none'
}),

scaleButton = {
	scale: 0.95
},


forgotPass = {
	fontSize: fontSizeSmall,
	color: primaryColor
}