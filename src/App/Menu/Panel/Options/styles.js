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

close = {
	display: 'grid',
	alignItems: 'center',
	height: '38px',
	margin: '12px 0'
},

options = {
	display: 'grid',
	gridRowGap: '30px',
	fontFamily: fontTitle,
	color: primaryColor
},

option = {
	display: 'grid',
	gridTemplateColumns: '35px 1fr',
	gridColumnGap: '15px',
	alignItems: 'center'
},

icon = {
	display: 'grid',
	placeItems: 'center',
	height: '35px',
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