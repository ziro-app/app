import { fontTitle, primaryColor, grayColor2, successColor, alertColor, pendingColor } from '../../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	gridRowGap: '20px',
	marginTop: '10px'
},

block = {
	display: 'grid',
	color: primaryColor
},

space = {
	height: '1.5rem'
},

header = threeColumn => ({
	display: 'grid',
	gridTemplateColumns: threeColumn ? 'auto auto 1fr' : 'auto 1fr',
	gridColumnGap: '6px',
	placeItems: 'end',
	height: '20px'
}),

name = {
	fontFamily: fontTitle,
	fontSize: '1.2rem',
	textTransform: 'uppercase'
},

note = {

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

inputCss =	`
	input:disabled {
		background: none;
	}
	input::placeholder {
	   	color: ${grayColor2};
	}
`,

error = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gridColumnGap: '5px',
	alignItems: 'center',
	color: alertColor,
	fontSize: '1.1rem'
},

pending = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gridColumnGap: '5px',
	alignItems: 'center',
	color: pendingColor,
	fontSize: '1.1rem'
},

validated = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	alignItems: 'center',
	gridColumnGap: '2px',
	fontSize: '1.1rem',
	color: successColor
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

headerAlt = {
	...header,
	gridTemplateColumns: 'auto auto 1fr',
	gridColumnGap: '6px'
},

spinner = {
	animation: 'spin 0.6s linear infinite',
	justifySelf: 'end'
},

label = {
	fontFamily: fontTitle,
	fontSize: '1.2rem',
	textTransform: 'uppercase'
},

labelWrapper = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gridColumnGap: '2px',
	alignItems: 'center'
},

submit = {
	padding: '2px 6px',
	border: `1px solid rgb(74,74,74)`,
	borderRadius: '2px',
	textTransform: 'uppercase',
	cursor: 'pointer'
}