import { padding, fontTitle, fontBody, primaryColor,
	successColor, secondaryColor } from '../../../Theme/styleVariables'

export const

container = {
	position: 'relative',
	padding: padding
},

back = {
	position: 'absolute',
	display: 'grid',
	alignItems: 'center',
	height: '100%'
},

step = {
	margin: '0',
	fontFamily: fontTitle,
	fontSize: '2.1rem',
	color: primaryColor,
	textAlign: 'center'
},

wrapper = {
	display: 'grid',
	justifyItems: 'center'
},

badge = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gridColumnGap: '6px',
	alignItems: 'center',
	justifyItems: 'start',
	fontFamily: fontBody,
	color: successColor
},

sub = {
	fontSize: '1.4rem',
	textTransform: 'uppercase'
},

dot = {
	color: secondaryColor,
	fontSize: '2.1rem'
}