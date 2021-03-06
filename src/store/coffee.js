import { createContext, useContext, useReducer } from 'react';

export const CoffeeContext = createContext({});

export const Actions = {
	ADD_HOT_DRINKS: 'ADD_HOT_DRINKS',
	ADD_COLD_DRINKS: 'ADD_COLD_DRINKS',
};

export const asArray = (object = {}) =>
	Object.keys(object)
		.map((key) => object[key])
		.reduce((acc, curr) => acc.push(curr) && acc, []);

const mapArray = ({ data = [], prefixIdWith = '', idField = 'id' }) =>
	data
		.filter((o) => typeof o === 'object')
		.map((entry) => ({ [`${prefixIdWith}${entry[idField]}`]: entry }))
		.reduce((acc, curr) => ({ ...acc, ...curr }), {});

function reducer(state, action) {
	const { type, data } = action;
	const debug = false;
	let newState = state;

	if (debug) {
		console.group(`Coffee [${type}]`);
		console.log('State:');
		console.log(state);
		console.log('Data:');
		console.log(data);
	}

	switch (type) {
		case Actions.ADD_HOT_DRINKS:
			if (!Array.isArray(data)) {
				console.warn(`[${type}]: Data is not array, breaking`);
				break;
			}

			newState = {
				...state,
				...mapArray({
					data: data.map((o) => ({
						...o,
						type: 'hot',
						uid: `hot_${o.id}`,
					})),
					prefixIdWith: 'hot_',
				}),
			};
			break;
		case Actions.ADD_COLD_DRINKS:
			if (!Array.isArray(data)) {
				console.warn(`[${type}]: Data is not array, breaking`);
				break;
			}

			newState = {
				...state,
				...mapArray({
					data: data.map((o) => ({
						...o,
						type: 'iced',
						uid: `iced_${o.id}`,
					})),
					prefixIdWith: 'iced_',
				}),
			};

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

	return { ...newState };
}

export const useCoffeeStore = () => {
	const { state, dispatch } = useContext(CoffeeContext);
	return { state, dispatch };
};

export const useInitialiseCoffeeStore = () => {
	const [state, dispatch] = useReducer(reducer, {});

	return { state, dispatch };
};
