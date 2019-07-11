import { standardPadding, fontWeightMuted, primaryColor, grayColor1, grayColor3, shadow } from '../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	gridRowGap: '40px',
	margin: '60px auto',
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