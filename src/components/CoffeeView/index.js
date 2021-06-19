import React, { useEffect } from 'react';
import CustomTabs from '../CustomTabs/CustomTabs';
import { AcUnit, AllInclusive, Whatshot } from '@material-ui/icons';
import { useCoffeeStore } from '../../store/coffee';
import { doFetchCoffeeCold, doFetchCoffeeHot } from '../../actions';
import CoffeeTable from '../CoffeeTable';
import { useBasket } from '../../store/basket';

export default function CoffeeView() {
	const { state, dispatch } = useCoffeeStore();
	const { state: cartState, dispatch: cartDispatch } = useBasket();

	useEffect(() => {
		Promise.all([doFetchCoffeeCold(dispatch), doFetchCoffeeHot(dispatch)]);
	}, []);

	return (
		<CustomTabs
			title="Coffee:"
			headerColor="primary"
			tabs={[
				{
					tabName: 'All',
					tabIcon: AllInclusive,
					tabContent: (
						<CoffeeTable
							state={state}
							cartState={cartState}
							cartDispatch={cartDispatch}
						/>
					),
				},
				{
					tabName: 'Hot',
					tabIcon: Whatshot,
					tabContent: (
						<CoffeeTable
							state={state}
							cartState={cartState}
							cartDispatch={cartDispatch}
							filter={({ type }) => type === 'hot'}
						/>
					),
				},
				{
					tabName: 'Cold',
					tabIcon: AcUnit,
					tabContent: (
						<CoffeeTable
							state={state}
							cartState={cartState}
							cartDispatch={cartDispatch}
							filter={({ type }) => type === 'iced'}
						/>
					),
				},
			]}
		/>
	);
}
