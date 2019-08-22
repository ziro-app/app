import { fontTitle, primaryColor, successColor } from '../../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	gridRowGap: '20px',
	marginTop: '10px'
},

warning = {
	display: 'grid',
	gridRowGap: '4px',
	justifyItems: 'center',
	maxWidth: '250px',
	margin: '0 auto',
	textAlign: 'center',
	fontSize: '1.2rem',
	color: '#E5CD00',
},

field = {
	display: 'grid',
	color: primaryColor
},

header = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	alignItems: 'center',
	justifyItems: 'end'
},

headerAlt = {
	...header,
	gridTemplateColumns: 'auto auto 1fr',
	gridColumnGap: '6px'
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
	gridColumnGap: '2px',
	alignItems: 'center'
},

pending = {
	color: '#E5CD00',
	fontSize: '1.2rem'
},

validated = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	alignItems: 'center',
	gridColumnGap: '2px',
	fontSize: '1.2rem',
	color: successColor
}