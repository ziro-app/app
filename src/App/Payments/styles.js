import { fontTitle, primaryColor, alertColor, successColor } from '../../Theme/styleVariables'

export const

container = {
	display: 'grid',
	marginTop: '10px',
	fontSize: '1.6rem'
},

transaction = {
	display: 'grid',
	borderLeft: `2px ${alertColor} solid`,
	padding: '0 0 30px 20px',
	gridTemplate: `
		'status date'
		'supplier supplier'
		'value value'
		'quantity quantity'
		/ 70% 30%`
},

transaction2 = {
	...transaction,
	borderLeft: `2px ${successColor} solid`,
},

transaction3 = {
	...transaction,
	borderLeft: `2px ${primaryColor} solid`,
},

status = {
	gridArea: 'status',
	alignSelf: 'end',
	fontFamily: fontTitle,
	fontSize: '0.9rem',
	textTransform: 'uppercase',
	color: alertColor
},

status2 = {
	...status,
	color: successColor
},

status3 = {
	...status,
	color: primaryColor
},

supplier = {
	gridArea: 'supplier',
},

value = {
	gridArea: 'value',
},

date = {
	gridArea: 'date',
	justifySelf: 'end',
	fontSize: '1.2rem',
	textTransform: 'uppercase'
},

quantity = {
	gridArea: 'quantity',
	fontSize: '1.2rem'
}