import React from 'react';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import CardFooter from '../Card/CardFooter';
import Button from '@material-ui/core/Button';
import { Actions } from '../../store/basket';
import { asArray } from '../../store/coffee';
import { RemoveShoppingCart } from '@material-ui/icons';
import CustomTable from '../Table/Table';

export default function CartDetails({ state, dispatch, coffeeState }) {
	const itemsCount = Object.keys(state).length;
	const ingredients = asArray(coffeeState)
		.filter(({ id, type }) => state[`${type}_${id}`])
		.map(({ ingredients }) => ingredients);

	console.log(ingredients);

	return (
		<Card>
			<CardHeader>title</CardHeader>
			<CardBody>
				<CustomTable tableHead={['Item Name', 'Quantity']} tableData={[]} />

				<CustomTable tableHead={['Ingredient', 'Quantity']} tableData={[]} />
			</CardBody>
			<CardFooter>
				<span />
				<Button
					disabled={!itemsCount}
					onClick={() => dispatch({ type: Actions.CLEAR_ALL })}
				>
					{' '}
					<RemoveShoppingCart /> Clear Cart
				</Button>
			</CardFooter>
		</Card>
	);
}
