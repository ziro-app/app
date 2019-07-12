import { maxWidth, standardPadding, fontWeightMuted, fontWeightBody, fontSizeSmall,
	primaryColor, grayColor1, grayColor3, alertColor, shadow } from '../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	gridRowGap: '20px',
	margin: '60px auto',
	maxWidth: maxWidth,
	padding: standardPadding
},

wrapper = {
	display: 'grid',
	gridRowGap: '5px',
	color: grayColor1,
	fontWeight: fontWeightMuted
},

input = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	border: 'none',
	color: primaryColor,
	boxShadow: `0px 2px 0px ${grayColor3}`
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
	gridRowGap: '15px',
	textAlign: 'center',
	marginTop: '-10px'
},

loader = {
	display: 'grid',
	alignItems: 'center',
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

scaleButton = {
	scale: 0.95
},


forgotPass = {
	fontSize: fontSizeSmall,
	color: primaryColor
}