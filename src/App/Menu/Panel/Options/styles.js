import { maxWidth, standardMargin, standardPadding, fontTitle, fontSizeSmall, fontWeightMuted,
	primaryColor, grayColor1 } from '../../../../Theme/styleVariables'

export const

container = {
	height: '100%',
	maxWidth: maxWidth,
	margin: standardMargin,
	padding: standardPadding,
	background: 'white'

},

header = {
	display: 'grid',
	gridTemplateColumns: '30px 1fr',
	placeItems: 'center'
},

title = {
	marginLeft: '-30px',
	fontFamily: fontTitle
},

close = {
	display: 'grid',
	alignItems: 'center'
},

options = {
	display: 'grid',
	gridRowGap: '30px',
	marginTop: '60px',
	fontFamily: fontTitle,
	color: primaryColor
},

option = {
	display: 'grid',
	gridTemplateColumns: '36px 1fr',
	gridColumnGap: '15px',
	alignItems: 'center',
	cursor: 'pointer'
},

icon = {
	display: 'grid',
	placeItems: 'center',
	height: '36px',
	borderRadius: '100%',
	boxShadow: `0px 3px 11px -4px rgba(34,34,34,0.7)`
},

text = {
	fontSize: '1.5rem',
	textTransform: 'uppercase'
},

soon = {
	fontSize: fontSizeSmall,
	fontWeight: fontWeightMuted,
	fontStyle: 'italic',
	color: grayColor1,
}