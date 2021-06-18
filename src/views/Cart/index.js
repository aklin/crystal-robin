import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import React from 'react';
import CartDetails from '../../components/CartDetails';
import { useBasket } from '../../store/basket';
import { useCoffeeStore } from '../../store/coffee';

export default function CartView() {
	const { state, dispatch } = useBasket();
	const { state: coffeeState } = useCoffeeStore();

	return (
		<div>
			<GridContainer>
				<GridItem xs={12} sm={12} md={6}>
					<CartDetails
						coffeeState={coffeeState}
						state={state}
						dispatch={dispatch}
					/>
				</GridItem>
			</GridContainer>
		</div>
	);
}
