import React, { useEffect } from 'react';
import Tasks from '../Tasks/Tasks';
import { bugs, website } from '../../variables/general';
import CustomTabs from '../CustomTabs/CustomTabs';
import { AcUnit, Whatshot } from '@material-ui/icons';
import { useCoffeeStore } from '../../store/coffee';
import { doFetchCoffeeCold, doFetchCoffeeHot } from '../../actions';

export default function CoffeeView() {
	const { dispatch } = useCoffeeStore();

	useEffect(() => {
		Promise.all([doFetchCoffeeCold(dispatch), doFetchCoffeeHot(dispatch)]);
	}, []);

	useEffect(() => {}, []);

	return (
		<CustomTabs
			title="Coffee:"
			headerColor="primary"
			tabs={[
				{
					tabName: 'Hot',
					tabIcon: Whatshot,
					tabContent: (
						<Tasks
							checkedIndexes={[0, 3]}
							tasksIndexes={[0, 1, 2, 3]}
							tasks={bugs}
						/>
					),
				},
				{
					tabName: 'Cold',
					tabIcon: AcUnit,
					tabContent: (
						<Tasks checkedIndexes={[0]} tasksIndexes={[0, 1]} tasks={website} />
					),
				},
			]}
		/>
	);
}
