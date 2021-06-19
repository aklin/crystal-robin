import Widget from '../Widget';
import { asArray, useCoffeeStore } from '../../store/coffee';
import PropTypes from 'prop-types';
import { AcUnit, LocalCafe } from '@material-ui/icons';
import React from 'react';
import { makeStyles } from '@material-ui/core';

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js';

const useStyles = makeStyles(styles);

export default function CoffeeWidget({ cold = false }) {
	const classes = useStyles();
	const iconName = cold ? <AcUnit /> : <LocalCafe />;
	const temperature = cold ? 'iced' : 'hot';

	const { state = {} } = useCoffeeStore();
	const items = asArray(state);
	const itemsFiltered = items.filter(({ type }) => type === temperature);
	const percentage = (itemsFiltered.length * 100) / Math.max(items.length, 1);

	return (
		<Widget
			icon={iconName}
			iconColor={temperature === 'iced' ? 'info' : 'warning'}
			content={
				<>
					<h3 className={classes.cardTitle}>{itemsFiltered.length}</h3>
					<p className={classes.cardCategory}>{temperature} coffees</p>
				</>
			}
			footer={<p>That&#39;s {percentage.toFixed(1)}% of the total</p>}
		/>
	);
}

Widget.propTypes = {
	cold: PropTypes.bool,
};
