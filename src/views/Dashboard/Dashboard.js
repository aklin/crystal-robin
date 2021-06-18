import React from 'react';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import CoffeeWidget from '../../components/CoffeeWidget';
import CoffeeView from '../../components/CoffeeView';

export default function Dashboard() {
	return (
		<div>
			<GridContainer>
				<GridItem xs={12} sm={6} md={3}>
					<CoffeeWidget />
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<CoffeeWidget cold />
				</GridItem>
			</GridContainer>
			<GridContainer>
				<GridItem xs={12} sm={12} md={6}>
					<CoffeeView />
				</GridItem>
			</GridContainer>
		</div>
	);
}
