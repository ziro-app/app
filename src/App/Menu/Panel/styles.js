import { maxWidth, standardMargin, standardPadding, fontTitle } from '../../../Theme/styleVariables'

export const

panel = {
	position: 'absolute',
	width: '100%',
	height: '100%',
	top: '0',
	left: '0'
},

container = {
	display: 'grid',
	gridTemplateColumns: '30px 1fr',
	placeItems: 'center',
	height: '100%',
	maxWidth: maxWidth,
	margin: standardMargin,
	padding: standardPadding,
	background: 'white'

},

text = {
	marginLeft: '-30px',
	fontFamily: fontTitle
}