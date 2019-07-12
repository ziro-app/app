import { maxWidth, standardPadding, fontWeightMuted, fontWeightBody, fontSizeSmall,
	primaryColor, grayColor1, grayColor3, alertColor, shadow } from '../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	gridRowGap: '30px',
	margin: '60px auto',
	maxWidth: maxWidth,
	padding: standardPadding
},

inputWrapper = {
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

forgotPass = {
	marginTop: '-15px',
	textAlign: 'center',
	fontSize: fontSizeSmall,
	color: primaryColor
},

error = {
	fontSize: fontSizeSmall,
	color: alertColor,
	fontWeight: fontWeightBody
},

submit = {
	marginTop: '30px',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	cursor: 'pointer',
	padding: '10px 0px',
	border: `1px solid ${primaryColor}`,
	borderRadius: '20px',
	color: '#FFF',
	backgroundColor: primaryColor,
	boxShadow: `${shadow}`
}