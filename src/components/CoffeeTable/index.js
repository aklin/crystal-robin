import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/material-dashboard-react/components/tasksStyle';
import { asArray } from '../../store/coffee';
import { AddToCart, RemoveFromCart } from '../CustomIcons';
import { Actions } from '../../store/basket';

const useStyles = makeStyles(styles);

const lookupInCart = (uid, cartState) => cartState[uid] || 0;

const trimLongText = (text = '') =>
	text.length < 76 ? text : text.substr(0, 72) + '...';

export default function CoffeeTable({
	state,
	cartState = {},
	cartDispatch,
	filter,
}) {
	const classes = useStyles();

	const items = asArray(state)
		.filter((item) => (typeof filter === 'function' ? filter(item) : true))
		.sort((a, b) => a.title.localeCompare(b.title));

	console.log(cartState);

	return (
		<Table className={classes.table}>
			<TableBody>
				{items.map(({ uid, title, description, ingredients }) => (
					<TableRow key={`${uid}`} className={classes.tableRow}>
						<TableCell className={classes.tableCell}>{title}</TableCell>
						<TableCell className={classes.tableCell} title={description}>
							{trimLongText(description)}
						</TableCell>
						<TableCell className={classes.tableActions}>
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
						</TableCell>
						<TableCell className={classes.tableCell}>
							{lookupInCart(uid, cartState)}
						</TableCell>
						<TableCell className={classes.tableActions}>
							<AddToCart
								classes={classes}
								onClick={(e) => {
									e.preventDefault();
									cartDispatch({ type: Actions.ADD_TO_CART, data: { uid } });
								}}
							/>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
