import { createContext, useContext, useReducer } from 'react';

export const BasketContext = createContext({});

export const Actions = {
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	CLEAR_ALL: 'CLEAR_ALL',
};

function reducer(state, action) {
	const { type, data } = action;
	const { uid } = data;
	const debug = false;
	let newState = state;

	const oldValue = state[uid] || 0;
	let newValue = oldValue;

	if (debug) {
		console.group(`Basket [${type}]`);
		console.log('State:');
		console.log(state);
		console.log('Data:');
		console.log(data);
	}

	switch (type) {
		case Actions.ADD_TO_CART:
			if (!uid) {
				console.warn(`[${type}]: Missing ID, returning`);
				break;
			}

			newState = { ...state, [uid]: oldValue + 1 };
			break;
		case Actions.REMOVE_FROM_CART:
			if (!uid) {
				console.warn(`[${type}]: Missing ID, returning`);
				break;
			}

			newValue = Math.max(0, oldValue - 1);

			//remove entries with 0 items
			if (newValue >= 0) {
				newState = { ...state, [uid]: newValue };
			} else {
				delete newState[uid];
			}

			break;

		case Actions.CLEAR_ALL:
			newState = {};
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
