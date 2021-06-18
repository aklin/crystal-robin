import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CoffeeView from '../../components/CoffeeView';
import React from 'react';

export default function Cart() {
	return (
		<div>
			<GridContainer>
				<GridItem xs={12} sm={12} md={6}>
					<CoffeeView />
				</GridItem>
			</GridContainer>
		</div>
	);
}
