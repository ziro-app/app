import { fontTitle, primaryColor, successColor } from '../../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	gridRowGap: '20px',
	marginTop: '40px'
},

field = {
	display: 'grid'
},

label = {
	fontFamily: fontTitle,
	fontSize: '1.3rem',
	textTransform: 'uppercase'
},

input = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	padding: '4px 0 0',
	border: 'none',
	fontSize: '1.6rem',
	color: primaryColor
},

labelWrapper = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gridColumnGap: '6px'
},

validated = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	alignItems: 'center',
	gridColumnGap: '2px',
	fontSize: '1.2rem',
	color: successColor
}