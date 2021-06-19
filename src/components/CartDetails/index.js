import React, { useMemo } from 'react';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import CardFooter from '../Card/CardFooter';
import Button from '@material-ui/core/Button';
import { Actions } from '../../store/basket';
import { RemoveShoppingCart } from '@material-ui/icons';
import CustomTable from '../Table/Table';

const mergeStores = (cartState, coffeeState) =>
	Object.keys(cartState)
		.map((uid) => coffeeState[uid])
		.sort((a, b) => a.title.localeCompare(b.title))
		.map(({ uid, ...coffeeItem }) => ({
			...coffeeItem,
			uid,
			inCart: cartState[uid],
		}));

export default function CartDetails({ cartState, cartDispatch, coffeeState }) {
	const merged = useMemo(
		() => mergeStores(cartState, coffeeState),
		[cartState]
	);
	const cartEmpty = !Object.keys(cartState).length;

	const cartRows = merged.map(({ title, inCart }) => [title, `${inCart}`]);

	const ingCounts = merged
		.map(({ inCart, ingredients }) => ({
			inCart,
			ingredients: ingredients || [],
		}))
		.reduce((acc, { inCart, ingredients }) => {
			ingredients.forEach(
				(ingredient) =>
					(acc[ingredient] = acc[ingredient]
						? acc[ingredient] + inCart
						: inCart)
			);
			return acc;
		}, {});

	const ingRows = Object.keys(ingCounts)
		.sort((a, b) => a.localeCompare(b))
		.map((key) => [key, `${ingCounts[key]}`]);

	return (
		<Card>
			<CardHeader>
				<h3>Your Cart</h3>
			</CardHeader>
			<CardBody>
				<h4>Items</h4>
				<CustomTable
					tableHead={['Item Name', 'Quantity']}
					tableData={cartRows}
				/>

				<h4>Ingredients Breakdown</h4>
				<p>Adding together all ingredients from the items in your cart</p>
				<CustomTable
					tableHead={['Ingredient', 'Quantity']}
					tableData={ingRows}
				/>
			</CardBody>
			<CardFooter>
				<span />
				<Button
					disabled={cartEmpty}
					onClick={() => cartDispatch({ type: Actions.CLEAR_ALL })}
				>
					<RemoveShoppingCart /> Clear Cart
				</Button>
			</CardFooter>
		</Card>
	);
}
