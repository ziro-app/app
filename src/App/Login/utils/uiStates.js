export const

states = {
	accepting_inputs: { INPUT_CREDENTIALS: 'accepting_inputs', SUBMIT_CREDENTIALS: 'submitting' },
	submitting: { SUCCESS: 'accepting_inputs', ERROR: 'error_submitting' },
	error_submitting: { INPUT_CREDENTIALS: 'accepting_inputs' }
},

initialState = 'accepting_inputs'