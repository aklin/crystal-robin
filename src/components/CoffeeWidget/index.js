import Widget from '../Widget';
import { asArray, useCoffeeStore } from '../../store/coffee';
import PropTypes from 'prop-types';
import { AcUnit, LocalCafe } from '@material-ui/icons';
import React from 'react';

export default function CoffeeWidget({ cold = false }) {
	const iconName = cold ? <AcUnit /> : <LocalCafe />;
	const temperature = cold ? 'iced' : 'hot';

	const { state = {} } = useCoffeeStore();
	const items = asArray(state);
	const itemsFiltered = items.filter(({ type }) => type === temperature);
	const percentage = (itemsFiltered.length * 100) / Math.max(items.length, 1);

	return (
		<Widget
			icon={iconName}
			iconColor={temperature === 'cold' ? 'primary' : 'warning'}
			content={
				<p>
					${items.length} {temperature} coffees
				</p>
			}
			footer={<p>That&#39;s {percentage.toFixed(1)}% of the total items </p>}
		/>
	);
}

Widget.propTypes = {
	cold: PropTypes.bool,
};
