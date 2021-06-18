import { doGet } from './api';
import { Actions } from '../store/coffee';

export const doFetchCoffeeHot = async (dispatch) => {
	const data = (await doGet('hot')).filter(({ title }) => !!title);

	dispatch({ type: Actions.ADD_HOT_DRINKS, data });
};

export const doFetchCoffeeCold = async (dispatch) => {
	const data = await doGet('iced');

	dispatch({ type: Actions.ADD_COLD_DRINKS, data });
};
