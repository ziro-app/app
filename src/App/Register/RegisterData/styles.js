import { maxWidth, standardPadding, successColor, fontTitle, fontWeightBody, fontSizeSmall,
	primaryColor, grayColor3, alertColor, shadow } from '../../../Theme/styleVariables'

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
	gridColumnGap: '5px',
	alignItems: 'center',
	marginBottom: '-4px',
	paddingLeft: '5px'
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

scaleButton = {
	scale: 0.95
}