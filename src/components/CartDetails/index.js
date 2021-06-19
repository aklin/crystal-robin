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

export default function CartDetails({ cartState, cartDispatch, coffeeState }) {
	const itemsCount = Object.keys(cartState).length;
	const ingredients = asArray(coffeeState)
		.filter(({ id, type }) => coffeeState[`${type}_${id}`])
		.map(({ ingredients }) => ingredients);

	const cartRows = Object.keys(cartState)
		.map((uid) => coffeeState[uid])
		.map(({ title, uid }) => [title, `${cartState[uid]}`]);

	return (
		<Card>
			<CardHeader>title</CardHeader>
			<CardBody>
				<CustomTable
					tableHead={['Item Name', 'Quantity']}
					tableData={cartRows}
				/>

				<CustomTable tableHead={['Ingredient', 'Quantity']} tableData={[]} />
			</CardBody>
			<CardFooter>
				<span />
				<Button
					disabled={!itemsCount}
					onClick={() => cartDispatch({ type: Actions.CLEAR_ALL })}
				>
					<RemoveShoppingCart /> Clear Cart
				</Button>
			</CardFooter>
		</Card>
	);
}
