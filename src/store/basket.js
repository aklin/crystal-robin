import { createContext, useContext, useReducer } from 'react';

export const BasketContext = createContext({});

export const Actions = {
	ADD_ITEM: 'ADD_ITEM',
	REMOVE_ITEM: 'REMOVE_ITEM',
};

function reducer(state, action) {
	const { type, data } = action;
	const { id } = data;
	const debug = false;
	let newState = state;

	const oldValue = state[id] || 0;
	let newValue = oldValue;

	if (debug) {
		console.group(`Basket [${type}]`);
		console.log('State:');
		console.log(state);
		console.log('Data:');
		console.log(data);
	}

	switch (type) {
		case Actions.ADD_ITEM:
			if (!id) {
				console.warn(`[${type}]: Missing ID, returning`);
				break;
			}

			newState = { ...state, [id]: oldValue + 1 };
			break;
		case Actions.REMOVE_ITEM:
			if (!id) {
				console.warn(`[${type}]: Missing ID, returning`);
				break;
			}

			newValue = Math.max(0, oldValue - 1);

			//remove entries with 0 items
			if (newValue > 0) {
				newState = { ...state, [id]: newValue };
			} else {
				delete newState[id];
			}

			break;

		default:
			console.warn(`Unrecognised action type: ${type}`);
			break;
	}

	if (debug) {
		console.log('New state:');
		console.log(newState);
		console.groupEnd();
	}

	return newState;
}

export const useBasket = () => {
	const { state, dispatch } = useContext(BasketContext);
	return { state, dispatch };
};

export const useInitialiseBasket = () => {
	const [state, dispatch] = useReducer(reducer, {});

	return { state, dispatch };
};
