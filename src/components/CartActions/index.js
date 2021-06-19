import { AddToCart, RemoveFromCart } from '../CustomIcons';
import { Actions } from '../../store/basket';
import React from 'react';

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
						data: { uid },
					});
				}}
			/>
			{lookupInCart(uid, cartState)}
			<AddToCart
				classes={classes}
				onClick={(e) => {
					e.preventDefault();
					cartDispatch({ type: Actions.ADD_TO_CART, data: { uid } });
				}}
			/>
		</div>
	);
}
