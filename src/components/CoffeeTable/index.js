import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/material-dashboard-react/components/tasksStyle';
import { asArray } from '../../store/coffee';
import { AddToCart, RemoveFromCart } from '../CustomIcons';

const useStyles = makeStyles(styles);

const lookupInCart = (id, cartState) => cartState[id] || 0;

const trimLongText = (text = '') =>
	text.length < 76 ? text : text.substr(0, 72) + '...';

export default function CoffeeTable({ state, cartState = {}, filter }) {
	const classes = useStyles();

	const items = asArray(state)
		.filter((item) => (typeof filter === 'function' ? filter(item) : true))
		.sort((a, b) => a.title.localeCompare(b.title));

	// console.log(items)

	return (
		<Table className={classes.table}>
			<TableBody>
				{items.map(({ id, type, title, description, ingredients }) => (
					<TableRow key={`${type}${id}`} className={classes.tableRow}>
						<TableCell className={classes.tableCell}>{title}</TableCell>
						<TableCell className={classes.tableCell} title={description}>
							{trimLongText(description)}
						</TableCell>
						<TableCell className={classes.tableActions}>
							<RemoveFromCart
								disabled={!lookupInCart(id, cartState)}
								classes={classes}
							/>
						</TableCell>
						<TableCell className={classes.tableCell}>
							{lookupInCart(id, cartState)}
						</TableCell>
						<TableCell className={classes.tableActions}>
							<AddToCart classes={classes} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
