import { AddToCart, RemoveFromCart } from '../CustomIcons';
import { Actions } from '../../store/basket';
import React from 'react';
import CustomInput from '../CustomInput/CustomInput';

const lookupInCart = (uid, cartState) => cartState[uid] || 0;

export default function CartActions({ classes, uid, cartState, cartDispatch }) {
	return (
		<div className={classes.cartActionsCell}>
			<RemoveFromCart
				disabled={!lookupInCart(uid, cartState)}
				classes={classes}
				onClick={(e) => {
					e.preventDefault();
					cartDispatch({
						type: Actions.REMOVE_FROM_CART,
						uid,
					});
				}}
			/>
			<CustomInput
				formControlProps={{}}
				id={uid}
				inputProps={{
					value: lookupInCart(uid, cartState),
					onChange: (e) => {
						e.preventDefault();
						cartDispatch({
							type: Actions.SET_CART_QTY,
							uid,
							qty: e.target.value,
						});
					},
				}}
			/>
			<AddToCart
				classes={classes}
				onClick={(e) => {
					e.preventDefault();
					cartDispatch({ type: Actions.ADD_TO_CART, uid });
				}}
			/>
		</div>
	);
}
