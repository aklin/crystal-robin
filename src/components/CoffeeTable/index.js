import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/material-dashboard-react/components/tasksStyle';
import { asArray } from '../../store/coffee';

const useStyles = makeStyles(styles);

export default function CoffeeTable({ state, filter }) {
	const classes = useStyles();

	const items = asArray(state).filter((item) =>
		typeof filter === 'function' ? filter(item) : true
	);

	return (
		<Table className={classes.table}>
			<TableBody>
				{items.map(({ id, type, title, description, ingredients }) => (
					<TableRow key={`${type}${id}`} className={classes.tableRow}>
						<TableCell className={classes.tableCell}>{title}</TableCell>
						<TableCell className={classes.tableCell}>{description}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
