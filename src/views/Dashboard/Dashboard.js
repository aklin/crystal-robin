import React from 'react';
// react plugin for creating charts
// @material-ui/core
// @material-ui/icons
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
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
					<Card>
						<CoffeeWidget cold />
					</Card>
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
