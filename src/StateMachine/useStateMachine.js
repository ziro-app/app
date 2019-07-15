import { useState } from 'react'

export const useStateMachine = (states, initialState) => {
	const [uiState, setUiState] = useState(initialState)
	const changeUiState = action => setUiState(states[uiState][action])
	return { uiState, changeUiState }
}

/* It receives an object containing all possible states and a string with the initial state
/* It returns a string with the current state and a function to update the state
/* States objects whose keys are actions and whose values are the next possible states */
/* State machine's goal is to update ui when async errors occur */